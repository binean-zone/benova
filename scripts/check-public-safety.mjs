#!/usr/bin/env node
/**
 * Chặn nội dung không được xuất hiện trong repository công khai.
 *
 * Repository này public, nên mọi file được track — không chỉ trang deploy — đều
 * có thể bị đọc. Script quét:
 *
 *   --all        file đang được track trong worktree (mặc định)
 *   --staged     toàn bộ nội dung trong index (quét kỹ)
 *   --diff       chỉ dòng thêm trong diff staged (nhẹ, dùng cho pre-commit)
 *   --range <r>  commit message + dòng thêm trong một range (dùng cho CI/push)
 *   --history    toàn bộ commit message và dòng được thêm trong lịch sử
 *   --pre-push   các commit sắp được push, đọc ref từ stdin của hook
 *   --message    một file commit message (hook commit-msg)
 *
 * Danh sách mẫu được mã hoá base64 ngay trong file này để bản thân guard không
 * công khai những tên mà nó cần chặn. Có thể bổ sung từ riêng mà không đưa vào
 * repo bằng `private/forbidden-terms.txt` (đã gitignore) hoặc biến môi trường
 * `BENOVA_SAFETY_EXTRA_TERMS` (phân tách bằng dấu phẩy). Term phụ khớp theo
 * ranh giới từ sau khi bỏ dấu + lowercase, không khớp substring.
 *
 * Mặc định chỉ chặn nhóm vendor/emulator/reverse-engineering. Cụm mô tả
 * "legacy stand-in" chỉ cảnh báo; dùng `--strict` để biến chúng thành lỗi.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

/* Mỗi mục: [regex source đã mã hoá base64, flags, nhãn hiển thị].
   Nhãn không chứa từ gốc nên log CI công khai vẫn an toàn. */
const BLOCK = [
  ['XGJpbmdlbml1bVxi', 'i', 'vendor/product identifier'],
  ['XGJ4c2J1aXBjd1xi', 'i', 'vendor/product identifier'],
  ['XGJpcGN3XGI=', 'i', 'vendor/product identifier'],
  ['XGJkeGNcYg==', 'i', 'vendor/product identifier'],
  ['XGJJTkdcYg==', '', 'vendor acronym'],
  ['XGJCTVJcYg==', '', 'internal protocol identifier'],
  ['XGJlbXVsYXQoPzplfGVkfGVzfGluZ3xpb258b3J8b3JzKT9cYg==', 'i', 'emulation framing'],
  ['XGJyZXZlcnNlW1xzLV0/ZW5naW5lZXIoPzppbmd8ZWR8cyk/XGI=', 'i', 'reverse-engineering framing'],
  ['XGJkZWNvbXBpbCg/OmV8ZWR8ZXJ8ZXJzfGluZ3xhdGlvbilcYg==', 'i', 'reverse-engineering framing'],
  ['XGJkaXNhc3NlbWJsKD86ZXxlZHxlc3xpbmd8eSlcYg==', 'i', 'reverse-engineering framing'],
];

const REVIEW = [
  ['XGJzdGFuZCg/OnN8aW5nKT9bXHMtXT9pblxzK2ZvclxzK2xlZ2FjeVxi', 'i', 'legacy stand-in framing'],
  ['dGhheVxzK3RoKD864bq/fGUpXHMrbGVnYWN5', 'i', 'legacy stand-in framing'],
  ['XGJsZWdhY3lccytzeXN0ZW1ccyt2ZW5kb3JcYg==', 'i', 'legacy vendor framing'],
  ['bmgoPzrDoHxhKVxzK2N1bmdccytjKD864bqlfGEpcFxzK2goPzrhu4d8ZSlccyt0aCg/OuG7kXxvKW5nXHMrbGVnYWN5', 'i', 'legacy vendor framing'],
];

const decode = (value) => Buffer.from(value, 'base64').toString('utf8');
const compile = (entries) =>
  entries.map(([source, flags, label]) => ({
    re: new RegExp(decode(source), flags.includes('u') ? flags : `${flags}u`),
    label,
  }));

const rules = { block: compile(BLOCK), review: compile(REVIEW) };

const BINARY = /\.(?:png|jpe?g|gif|webp|avif|ico|woff2?|ttf|otf|eot|pdf|zip|gz|mp4|mov)$/i;
const skipPath = (path) =>
  path === 'scripts/check-public-safety.mjs' ||
  path.startsWith('.git/') ||
  path.startsWith('node_modules/') ||
  path.startsWith('_site/') ||
  path.startsWith('private/');

const git = (args, options = {}) =>
  execFileSync('git', args, {
    cwd: root,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
    ...options,
  });

const fold = (value) =>
  value
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/[đĐ]/g, 'd')
    .toLowerCase();

const extraTerms = [];
const privateFile = join(root, 'private', 'forbidden-terms.txt');
if (existsSync(privateFile)) {
  for (const line of readFileSync(privateFile, 'utf8').split(/\r?\n/)) {
    const term = line.trim();
    if (term && !term.startsWith('#')) extraTerms.push(term);
  }
}
if (process.env.BENOVA_SAFETY_EXTRA_TERMS) {
  for (const term of process.env.BENOVA_SAFETY_EXTRA_TERMS.split(',')) {
    const trimmed = term.trim();
    if (trimmed) extraTerms.push(trimmed);
  }
}

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/* Term phụ khớp theo ranh giới từ để acronym ngắn (vd. ING, SIR) không khớp
   nhầm bên trong từ khác (using, desire). Term bắt đầu/kết thúc bằng ký tự
   không phải chữ-số thì không thêm \b ở phía đó. */
const wordPattern = (value) =>
  `${/^\w/.test(value) ? '\\b' : ''}${escapeRegExp(value)}${/\w$/.test(value) ? '\\b' : ''}`;

const compiledExtra = extraTerms.map((term) => ({
  term,
  re: new RegExp(wordPattern(fold(term)), 'u'),
}));

const addFinding = (findings, finding) => {
  const key = `${finding.kind}\0${finding.file}\0${finding.line}\0${finding.label}\0${finding.term || ''}`;
  if (!findings.seen.has(key)) {
    findings.seen.add(key);
    findings.list.push(finding);
  }
};

const scanLine = (line, file, lineNumber, findings) => {
  const text = line.normalize('NFC');
  for (const { re, label } of rules.block) {
    const match = re.exec(text);
    if (match) addFinding(findings, { kind: 'block', file, line: lineNumber, label, term: match[0] });
  }
  for (const { re, label } of rules.review) {
    const match = re.exec(text);
    if (match) addFinding(findings, { kind: 'review', file, line: lineNumber, label, term: match[0] });
  }
  const folded = fold(text);
  for (const { term, re } of compiledExtra) {
    if (re.test(folded)) {
      addFinding(findings, { kind: 'block', file, line: lineNumber, label: 'configured term', term });
    }
  }
};

const scanText = (text, file, findings, firstLine = 1) => {
  const lines = text.split(/\r?\n/);
  lines.forEach((line, index) => scanLine(line, file, firstLine + index, findings));
};

const scanName = (path, findings) => {
  for (const { re, label } of rules.block) {
    const match = re.exec(path.normalize('NFC'));
    if (match) addFinding(findings, { kind: 'block', file: path, line: 0, label, term: match[0] });
  }
  const foldedPath = fold(path);
  for (const { term, re } of compiledExtra) {
    if (re.test(foldedPath)) {
      addFinding(findings, { kind: 'block', file: path, line: 0, label: 'configured term', term });
    }
  }
};

const readSafe = (path) => {
  try {
    return readFileSync(path, 'utf8');
  } catch {
    return null;
  }
};

const scanTracked = (findings) => {
  for (const path of git(['ls-files', '-z']).split('\0').filter(Boolean)) {
    if (skipPath(path) || BINARY.test(path)) continue;
    scanName(path, findings);
    const text = readSafe(join(root, path));
    if (text !== null) scanText(text, path, findings);
  }
};

const scanStaged = (findings) => {
  const paths = git(['diff', '--cached', '--name-only', '-z', '--diff-filter=ACMR'])
    .split('\0')
    .filter(Boolean);
  for (const path of paths) {
    if (skipPath(path) || BINARY.test(path)) continue;
    scanName(path, findings);
    const text = git(['show', `:${path}`], { stdio: ['ignore', 'pipe', 'ignore'] });
    scanText(text, path, findings);
  }
};

const scanPatchText = (patch, findings) => {
  let file = null;
  let newLine = 1;
  for (const line of patch.split(/\r?\n/)) {
    if (line.startsWith('+++ b/')) {
      file = line.slice(6);
      continue;
    }
    if (line.startsWith('+++ ')) continue;
    if (line.startsWith('@@ ')) {
      const match = line.match(/\+(\d+)/);
      newLine = match ? Number(match[1]) : 1;
      continue;
    }
    if (!file || skipPath(file) || BINARY.test(file)) continue;
    if (line.startsWith('+')) {
      scanLine(line.slice(1), file, newLine, findings);
      newLine += 1;
    } else if (line.startsWith('-')) {
      // Dòng bị xoá không được đưa vào bản public mới.
    } else if (line.startsWith(' ')) {
      newLine += 1;
    }
  }
};

const scanCommitRange = (range, findings) => {
  const log = git(['log', '--format=%H%x00%B%x00', ...range]);
  const parts = log.split('\0');
  for (let index = 0; index + 1 < parts.length; index += 2) {
    const sha = parts[index].trim();
    const message = parts[index + 1];
    if (!sha) continue;
    scanText(message, `commit ${sha.slice(0, 12)}`, findings);
  }

  scanPatchText(
    git(['log', '-p', '--no-color', '--no-ext-diff', '-U0', '--format=commit %H', ...range]),
    findings
  );
};

const scanStagedDiff = (findings) => {
  const paths = git(['diff', '--cached', '--name-only', '-z', '--diff-filter=ACMR'])
    .split('\0')
    .filter(Boolean);
  if (!paths.length) return 0;
  for (const path of paths) scanName(path, findings);
  scanPatchText(
    git(['diff', '--cached', '--no-color', '--no-ext-diff', '-U0', '--diff-filter=ACMR']),
    findings
  );
  return paths.length;
};

const scanRange = (range, findings) => {
  const count = Number(git(['rev-list', '--count', range]).trim());
  if (!count) return 0;
  scanCommitRange([range], findings);
  return count;
};

const scanDirectory = (directory, findings) => {
  const walk = (current) => {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const full = join(current, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.isFile()) {
        const path = relative(directory, full).split('\\').join('/');
        if (BINARY.test(path)) continue;
        const text = readSafe(full);
        if (text !== null) scanText(text, path, findings);
      }
    }
  };
  walk(directory);
};

const blankFindings = () => ({ list: [], seen: new Set() });

const formatFinding = (finding, reveal) => {
  const location = finding.line ? `${finding.file}:${finding.line}` : finding.file;
  const detail = reveal && finding.term ? ` (“${finding.term}”)` : '';
  return `${location} — ${finding.label}${detail}`;
};

const printFindings = (findings, reveal) => {
  for (const finding of findings.list.filter((item) => item.kind === 'block')) {
    console.error(`✗ ${formatFinding(finding, reveal)}`);
  }
  for (const finding of findings.list.filter((item) => item.kind === 'review')) {
    console.error(`⚠ ${formatFinding(finding, reveal)}`);
  }
};

export const scanTextForBlockedTerms = (text) => {
  const findings = blankFindings();
  scanText(text, '<text>', findings);
  return findings.list.filter((item) => item.kind === 'block').map(({ line, label }) => ({ line, label }));
};

export const scanDirectoryForBlockedTerms = (directory) => {
  const findings = blankFindings();
  scanDirectory(resolve(directory), findings);
  return findings.list
    .filter((item) => item.kind === 'block')
    .map(({ file, line, label }) => ({ file, line, label }));
};

const parseArgs = (argv) => {
  const options = {
    all: false,
    staged: false,
    diff: false,
    range: null,
    history: false,
    prePush: false,
    message: null,
    strict: false,
    reveal: false,
  };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--all') options.all = true;
    else if (arg === '--staged') options.staged = true;
    else if (arg === '--diff') options.diff = true;
    else if (arg === '--history') options.history = true;
    else if (arg === '--pre-push') options.prePush = true;
    else if (arg === '--strict') options.strict = true;
    else if (arg === '--reveal') options.reveal = true;
    else if (arg === '--message') {
      options.message = argv[index + 1];
      index += 1;
    } else if (arg === '--range') {
      options.range = argv[index + 1];
      index += 1;
    } else {
      throw new Error(`unknown argument: ${arg}`);
    }
  }
  if (
    !options.all &&
    !options.staged &&
    !options.diff &&
    !options.range &&
    !options.history &&
    !options.prePush &&
    !options.message
  ) {
    options.all = true;
  }
  return options;
};

const prePushRanges = () => {
  const input = readFileSync(0, 'utf8').trim();
  const ranges = [];
  const refs = [];
  if (!input) return { ranges: [[['HEAD', '--not', '--remotes']]], refs };
  for (const line of input.split(/\r?\n/)) {
    const [localRef, localSha, , remoteSha] = line.trim().split(/\s+/);
    if (!localRef || !localSha || /^0+$/.test(localSha)) continue;
    refs.push(localRef);
    if (/^0+$/.test(remoteSha || '')) {
      ranges.push([localSha, '--not', '--remotes']);
    } else {
      ranges.push([`${remoteSha}..${localSha}`]);
    }
  }
  return { ranges, refs };
};

const main = () => {
  const options = parseArgs(process.argv.slice(2));
  const reveal = options.reveal || !(process.env.CI || process.env.GITHUB_ACTIONS);
  const findings = blankFindings();
  const scanned = [];

  if (options.all) {
    scanTracked(findings);
    scanned.push('tracked files');
  }
  if (options.staged) {
    scanStaged(findings);
    scanned.push('staged index');
  }
  if (options.diff) {
    const files = scanStagedDiff(findings);
    scanned.push(files ? `staged diff (${files} file)` : 'staged diff (rỗng)');
  }
  if (options.range) {
    const commits = scanRange(options.range, findings);
    scanned.push(`${commits} commit trong ${options.range}`);
  }
  if (options.message) {
    const message = readSafe(options.message);
    if (message !== null) scanText(message, options.message, findings);
    scanned.push('commit message');
  }
  if (options.history) {
    scanCommitRange(['--all'], findings);
    scanned.push('git history');
  }
  if (options.prePush) {
    const { ranges, refs } = prePushRanges();
    for (const ref of refs) scanName(ref, findings);
    for (const range of ranges) scanCommitRange(range, findings);
    scanned.push('outgoing commits');
  }

  const blocked = findings.list.filter((item) => item.kind === 'block');
  const reviewed = findings.list.filter((item) => item.kind === 'review');

  if (blocked.length) {
    printFindings({ list: blocked }, reveal);
    console.error(`\n✗ Chặn commit/push: ${blocked.length} vị trí chứa từ không được công khai.`);
    console.error('  Sửa nội dung, hoặc chuyển ghi chú nội bộ sang private/ (đã gitignore).');
    process.exit(1);
  }

  if (reviewed.length) {
    if (options.strict) {
      printFindings({ list: reviewed }, reveal);
      console.error(`\n✗ --strict: ${reviewed.length} vị trí dùng cụm mô tả legacy/stand-in.`);
      process.exit(1);
    }
    console.log(`⚠ ${reviewed.length} cảnh báo nhẹ về cụm legacy/stand-in (không chặn; chạy --strict để chặn).`);
  }

  console.log(`✓ Publish-safety: sạch (${scanned.join(', ') || 'không có nguồn nào'}).`);
};

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    main();
  } catch (error) {
    console.error(`✗ Publish-safety không chạy được: ${error.message}`);
    process.exit(1);
  }
}
