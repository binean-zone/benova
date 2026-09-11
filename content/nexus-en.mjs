/**
 * Binean Nexus page — English.
 *
 * Nexus owns Ingenium-specific capability. Echelon orchestrates the Flow,
 * while Vista brings Human Tasks and Flow state to developers in VS Code.
 */
export default {
  seo: {
    title: 'Binean Nexus — Automate Ingenium development and operations',
    description:
      'Binean Nexus turns DB2, database, policy, COBOL, Git and Ingenium runtime tools into Skills that combine into Flows for CI/CD, environment refresh and support debugging.',
    keywords:
      'Binean Nexus, Ingenium DevOps, Ingenium CI/CD, COBOL build, DB2 automation, database refresh, policy copy, VS Code Ingenium, Echelon, Vista',
  },

  brandName: 'Binean Nexus',
  headerCta: 'Discuss Nexus',

  notice: {
    text: 'The Nexus toolset has been used on a real Ingenium system; its Agent, Flow and Vista integration architecture is entering a new revamp round.',
    linkLabel: 'Discuss your environment',
  },

  nav: [
    { href: '#capabilities', label: 'Capabilities' },
    { href: '#flows', label: 'Flows' },
    { href: '#nexus-architecture', label: 'Architecture' },
    { href: '#developer', label: 'Developer' },
    { href: '#status', label: 'Status' },
  ],

  hero: {
    back: 'Back to BENOVA',
    eyebrow: 'DevOps built for Ingenium',
    title: 'Turn Ingenium work into repeatable Flows.',
    lead: 'Nexus captures Ingenium operational knowledge in a dedicated toolset. Each tool becomes a Nexus Agent Skill; Echelon combines them into Flows, while Vista brings the right Task and state to developers inside VS Code.',
    primaryCta: { label: 'Explore the Flows', href: '#flows' },
    secondaryCta: { label: 'See the current status', href: '#status' },
    terminal: {
      label: 'Developer Flow',
      context: 'work-item / T02073',
      steps: [
        { tool: 'igit', text: 'resolve changed source', state: 'done' },
        { tool: 'icomp', text: 'compile affected programs', state: 'done' },
        { tool: 'ing', text: 'restart DEV region', state: 'running' },
        { tool: 'flow', text: 'collect test evidence', state: 'queued' },
      ],
      result: 'One journey · One state · One evidence trail',
    },
  },

  capabilities: {
    id: 'capabilities',
    eyebrow: 'Skill primitives',
    title: 'Small tools, clear boundaries, composed into larger work',
    lead: 'Nexus keeps each operation deterministic and inspectable. The Agent does not need to speak directly to DB2 or Ingenium; it calls a Skill with explicit input, authority and outcome.',
    items: [
      {
        icon: 'DB',
        title: 'DB2, databases and policies',
        tools: 'iadm · idb · ipol',
        desc: 'Create and configure databases with DB admin authority; back up, restore and refresh Ingenium databases; export or import policies across environments.',
        points: ['Separate DBA operations from daily work', 'Keep checks before and after change', 'Support refresh and investigation flows'],
      },
      {
        icon: 'CO',
        title: 'Ingenium and COBOL',
        tools: 'ing · icomp',
        desc: 'Start or stop Ingenium regions, compile projects and process only the source actually affected to shorten the feedback loop.',
        points: ['Parallel and incremental compilation', 'Chain bind, restart and verification', 'Run from the terminal or a Flow'],
      },
      {
        icon: 'GI',
        title: 'Source and work items',
        tools: 'igit + icomp',
        desc: 'Put Git in Ingenium context: work-item branches, golden-point comparison, changed-file discovery and the exact source set passed into compilation.',
        points: ['One context from branch to build', 'Reduce error-prone Git operations', 'Produce explicit CI/CD input'],
      },
      {
        icon: 'NX',
        title: 'Environment and utilities',
        tools: 'nexus · dev tools · VS Code',
        desc: 'Prepare environment configuration, shared utilities and a basic VS Code integration layer so developers can work in their current context.',
        points: ['Configuration by environment', 'One developer entry point', 'Foundation for Vista Tasks in the IDE'],
      },
    ],
  },

  flows: {
    id: 'flows',
    eyebrow: 'Operational flows',
    title: 'Value appears when the Skills work together',
    lead: 'A CLI removes a few steps. A Flow that connects the right tools, authorities and checkpoints changes how the team operates Ingenium.',
    items: [
      {
        num: '01',
        title: 'CI/CD for Ingenium',
        summary: 'Move a work item from source changes to a release package with evidence.',
        steps: ['Read the branch and golden point', 'Resolve affected source', 'Compile and bind selectively', 'Run checks and collect results', 'Hand off for review or deployment'],
        outcome: 'A repeatable pipeline replaces a sequence of tribal commands.',
      },
      {
        num: '02',
        title: 'Refresh a low environment',
        summary: 'Coordinate the database, Ingenium runtime and post-refresh checks in one journey.',
        steps: ['Confirm source and target', 'Stop the affected region', 'Back up, restore or refresh the database', 'Reconfigure and start the region', 'Verify state and hand over'],
        outcome: 'Reduce waiting time while preserving the state of every step.',
      },
      {
        num: '03',
        title: 'Copy a policy for support and debugging',
        summary: 'Bring the right policy into DEV to reproduce an issue within a controlled scope.',
        steps: ['Receive policy and source environment', 'Check authority and target data', 'Export the policy', 'Import it into DEV', 'Prepare the region and debug Task'],
        outcome: 'Support gets a consistent reproduction environment and evidence for comparison.',
      },
    ],
    note: 'A Flow does more than add up tool features. It holds ordering, conditions, authority, human checkpoints and the ability to continue after an operation fails.',
  },

  architecture: {
    id: 'nexus-architecture',
    eyebrow: 'Inside BENOVA',
    title: 'Echelon orchestrates. Nexus executes. Vista keeps developers in the loop.',
    lead: 'The layers share Tasks and Outcomes while keeping separate responsibilities. Nexus can focus on Ingenium knowledge while each Flow remains observable and controlled from end to end.',
    layers: [
      { key: 'E', title: 'Echelon', role: 'Flow authority', desc: 'Keeps the Process, emits Tasks, receives Outcomes and chooses the next step.' },
      { key: 'N', title: 'Nexus Agent', role: 'Ingenium executor', desc: 'Selects and invokes a Skill that fits the Task, environment and granted authority.' },
      { key: 'S', title: 'Nexus Skills', role: 'Deterministic actions', desc: 'Operate DB2, databases, policies, COBOL, Git and the Ingenium runtime.' },
    ],
    human: {
      key: 'V',
      title: 'Vista for VS Code',
      role: 'Human workbench',
      desc: 'Shows Tasks, progress, logs and the points where a developer must review or act.',
    },
    signal: 'Task ↓ · Outcome ↑',
  },

  developer: {
    id: 'developer',
    eyebrow: 'Developer experience',
    title: 'A dedicated Flow catalog for development environments',
    lead: 'Vista VS Code Host can ship with Echelon Local — a compact runtime for one developer, using the same contracts as full Echelon while running DEV-focused Flows.',
    windowTitle: 'Vista for VS Code · DEV',
    features: [
      { icon: '▶', title: 'Run Flows locally', desc: 'Start, pause, retry and inspect every Task without leaving the IDE.' },
      { icon: '◎', title: 'Use the active context', desc: 'A Flow knows the workspace, branch, program or policy the developer is handling.' },
      { icon: '◇', title: 'People and machines share one journey', desc: 'Nexus runs Skills; Vista pauses at the right point for developer review or action.' },
      { icon: '↗', title: 'Share server contracts', desc: 'Suitable Flows can move to Echelon server without changing the Task and Outcome model.' },
    ],
    examples: ['Build work item', 'Prepare debug policy', 'Reset DEV region', 'Collect test evidence'],
  },

  status: {
    id: 'status',
    eyebrow: 'Now / Next',
    title: 'Keep what has been proven, revamp how the parts work together',
    lead: 'Nexus does not begin with an architecture slide. The tools and VS Code extension already exist; the next round standardizes them around Agents, Skills and Flows.',
    current: {
      tag: 'NOW · AVAILABLE',
      title: 'The Ingenium tooling foundation',
      items: ['CLI tools for DB2, databases, policies, runtime, compilation and Git', 'Optimizations built for the Ingenium development loop', 'A basic VS Code extension', 'Experience from a real Ingenium system'],
    },
    next: {
      tag: 'NEXT · REVAMP',
      title: 'A Flow-driven operating system',
      items: ['Standardize CLI tools as Nexus Skills', 'Have Nexus Agent execute Tasks from Echelon', 'Move predecessor workflows into Echelon Flows', 'Vista VS Code Host with Echelon Local for DEV'],
    },
    note: 'There is no single release-date promise. Each Flow will be proven on a real journey before the surface expands.',
  },

  cta: {
    id: 'nexus-contact',
    title: 'Start with one Ingenium Flow that is costing the team time.',
    lead: 'Choose a journey with clear input, an accountable owner and a measurable result — compiling a work item, refreshing a low environment or copying a policy for debugging. Binean will help separate it into Skills, Tasks and the right control points.',
    label: 'Discuss Nexus',
    subject: 'Binean Nexus - Discuss an Ingenium Flow',
    back: 'View BENOVA',
  },
};
