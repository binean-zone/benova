# 🛡️ Security & Reliability

---

## 🎯 Enterprise-Grade by Design

In the insurance and financial industry, security and reliability are not features — they are **non-negotiable requirements**. Nexus is engineered from the ground up to meet the stringent standards demanded by regulated industries, with multiple layers of protection built into every component.

---

## 🔐 Encryption & Credential Management

### AES-256-GCM Authenticated Encryption

All sensitive data in Nexus is protected using **AES-256-GCM** — the same encryption standard used by governments, military organizations, and leading financial institutions worldwide.

- **256-bit keys** — Computationally infeasible to brute-force
- **Galois/Counter Mode (GCM)** — Provides both confidentiality and integrity verification
- **Authenticated encryption** — Any tampering with encrypted data is automatically detected

### How Credentials Are Handled

Nexus follows the principle of **minimal exposure** for sensitive data:

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Encrypted   │────▶│  Decrypt in  │────▶│  Use & Clear │
│  Storage     │     │  Memory Only │     │  Immediately │
└──────────────┘     └──────────────┘     └──────────────┘
```

1. **At rest** — Credentials are stored in AES-256-GCM encrypted form in configuration files
2. **In transit** — Passwords are decrypted in memory only when needed for authentication
3. **After use** — Environment variables containing credentials are **immediately unset** after authentication, with verification and retry on failure
4. **Never logged** — Sensitive values never appear in log output or error messages

> **No plain-text passwords. Ever.** — Whether in configuration files, environment variables, or log output.

---

## 🛡️ Input Validation & Injection Prevention

### Defense Against OWASP Top 10

Nexus implements validation at every system boundary to prevent common attack vectors:

#### SQL Injection Prevention
- **Built-in `sql_escape()` function** — Automatically escapes special characters in SQL values
- **All user inputs sanitized** before use in database queries
- **Parameterized operations** — SQL statements use proper escaping, not string concatenation

#### Path Traversal Prevention
All file-related parameters are validated to prevent directory traversal attacks:
- Blocks path separators (`/`, `\`) in user-provided filenames
- Blocks null bytes and shell metacharacters
- Validates that generated archive paths resolve within expected directories

#### Command Injection Prevention
- User inputs are never passed directly to shell commands without escaping
- The `process::escape()` function ensures safe command construction
- Terminal operations use structured APIs rather than raw shell strings

### Parameter Validation

Every HTTP endpoint validates incoming parameters **before processing**:

```
Request → Validate → Process → Respond
            │
            ▼ (on failure)
        400 Bad Request
        with clear error message
```

Validated fields include:
- **Required fields** — `from`, `to`, `policy` must not be empty
- **Character safety** — No path separators, quotes, semicolons, or null bytes
- **Tag safety** — Optional tags undergo the same character validation

---

## 🔄 Reliability & Resilience

### Configurable Timeouts

Operations in Nexus are protected by **intelligent, configurable timeouts**:

- **Terminal read operations** — Default 300-second timeout (previously 10s), sufficient for long-running batch operations
- **Overridable per-implementation** — Different terminal types can specify appropriate timeout values
- **Clear timeout errors** — When timeouts occur, descriptive error messages identify the failed operation

### Connection Health Management

The terminal pool system ensures reliable connections:

- **Automatic health checks** — Dead connections are detected before use
- **Connection reuse** — Healthy connections are pooled and recycled, reducing overhead
- **Graceful degradation** — When connections fail, new ones are created transparently
- **Max-use limits** — Connections are proactively recycled after a configurable number of uses to prevent resource leaks

### Non-Blocking Architecture

The management server (isman) is built for high availability:

- **Async event loop** — Never blocked by I/O-bound operations
- **Dedicated thread pools** — Database queries, file I/O, and SSH commands run on separate threads via `spawn_blocking`
- **Graceful shutdown** — In-flight operations complete before the server stops
- **Panic isolation** — Individual request failures don't crash the server

### Error Handling

Nexus uses Rust's type system to enforce correct error handling:

- **No silent failures** — `Result<T, E>` types ensure every error is explicitly handled
- **Structured errors** — Custom error types with `thiserror` provide clear, actionable messages
- **Error propagation** — The `?` operator ensures errors bubble up cleanly to the caller
- **Logged warnings** — Critical cleanup operations (like credential removal) log warnings on failure and retry

---

## 🔏 Memory Safety

By choosing Rust, Nexus inherits **compile-time memory safety guarantees** that eliminate entire classes of vulnerabilities:

| Vulnerability | C/C++ | Java | **Rust** |
|---------------|-------|------|----------|
| Buffer overflow | ❌ Common | ✅ Safe | ✅ **Prevented at compile time** |
| Use-after-free | ❌ Common | ✅ Safe (GC) | ✅ **Prevented by ownership system** |
| Data races | ❌ Common | ⚠️ Possible | ✅ **Prevented at compile time** |
| Null pointer dereference | ❌ Common | ❌ Common | ✅ **No null — uses Option\<T\>** |
| Memory leaks | ❌ Common | ⚠️ Possible | ✅ **Prevented by RAII** |

> **70% of security vulnerabilities** in large C/C++ codebases are memory safety issues (Microsoft Security Response Center, 2019). Rust eliminates this entire category.

---

## 📊 Monitoring & Observability

### Built-in Health Endpoints

| Endpoint | Purpose | Response |
|----------|---------|----------|
| `GET /ping` | Quick connectivity check | `pong` |
| `GET /status` | System health report | `{status, uptime_secs}` |

### Structured Logging

Nexus uses the `tracing` framework for structured, leveled logging:

- **INFO** — Normal operational events (startup, connections, requests)
- **WARN** — Recoverable issues requiring attention (credential cleanup retries)
- **ERROR** — Failed operations requiring investigation
- **TRACE** — Detailed diagnostic information for debugging

All log entries include contextual metadata for efficient filtering and analysis.

---

## ✅ Security Checklist

| Area | Status | Details |
|------|--------|---------|
| Credential encryption | ✅ | AES-256-GCM for all stored passwords |
| Credential cleanup | ✅ | Immediate unset with verification |
| SQL injection prevention | ✅ | Built-in escaping and validation |
| Path traversal prevention | ✅ | Character validation on all file parameters |
| Input validation | ✅ | All HTTP parameters validated before processing |
| Memory safety | ✅ | Guaranteed by Rust's ownership system |
| Non-blocking I/O | ✅ | spawn_blocking for all blocking operations |
| Connection health | ✅ | Automatic health checks and pool management |
| Graceful shutdown | ✅ | Broadcast-based clean shutdown |
| Structured logging | ✅ | Leveled, contextual logging via tracing |

---

## 📄 Legal Disclaimer

This document is provided for reference and consulting purposes regarding system integration and transformation solutions.  
All trademarks, product names, and company names mentioned herein are the property of their respective owners.  
This project is not affiliated with, sponsored by, or endorsed by DXC Technology, Sun Life, or any other third party mentioned.
