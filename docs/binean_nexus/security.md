# 🔒 Security

> **"In the insurance industry, customer data is not just an asset — it is a trust relationship."**

---

## Why Security Is Priority One

Ingenium systems contain data for millions of insurance customers — personal information, policy contracts, payment history. A security breach can result in:

- 💸 Regulatory fines under GDPR, local data protection laws, and insurance regulations
- 📰 Reputational damage that cannot be quantified in a spreadsheet
- ⚖️ Legal liability toward millions of customers

Nexus was designed from the ground up with a **security-first mindset** — security is not a feature bolted on after the fact; it is the foundation of the architecture.

---

## 🔐 Credential Encryption

### AES-256-GCM — Military-Grade Standard

All credentials (DB2 passwords, SSH keys, API keys) are encrypted with AES-256-GCM before being stored anywhere.

```
Enter passphrase
      │
      ▼
┌──────────────────────┐
│  Derive encryption   │ ← scrypt (CPU/memory-hard)
│  key from passphrase │   Computationally infeasible to brute force
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  AES-256-GCM Encrypt │ ← NIST 800-38D
│  Random 96-bit IV    │   New IV generated per encryption operation
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Secure Storage      │ ← File system (ciphertext only)
│  (Ciphertext + Auth  │   Plaintext never written to disk
│   Tag + IV)          │
└──────────────────────┘
```

### Credential Lifecycle

- **Lazy decryption**: Only decrypted at the precise moment of use
- **Zero plaintext persistence**: Plaintext credential exists only in RAM, scoped to the consuming function
- **Secure drop**: Memory overwritten with zeros immediately after use (Rust `zeroize`)
- **Never logged**: The logging system actively prevents credentials from appearing in any log output

---

## 🛡️ OWASP Top 10 Protections

### Injection Attack Prevention

**SQL Injection — Zero Risk:**
```rust
// Built-in sql_escape() in Core library
// Escapes all special characters before query construction
let safe_query = format!(
    "SELECT * FROM policies WHERE id = '{}'",
    sql_escape(&user_input)
);
```

**Command Injection — Architecture-Level Prevention:**
- User input is never passed directly to shell commands
- All parameters go through whitelist validation before use
- Parameterized commands with full argument escaping

### Access Control

| Protection Layer | Mechanism |
|-----------------|-----------|
| **Authentication** | Encrypted credential verification before every operation |
| **Authorization** | Role-based access, principle of least privilege |
| **Audit trail** | Immutable log of all sensitive operations |
| **Rate limiting** | Request throttling to prevent brute force attacks |

---

## 🦀 Rust — Memory Safety by Language Design

Unlike traditional C/C++, Rust prevents memory vulnerabilities **at compile time** — no runtime checks, no overhead.

| Common Vulnerability | C/C++ | Rust |
|---------------------|-------|------|
| Buffer overflow | ❌ Undetected | ✅ Compile error |
| Use-after-free | ❌ Crash/exploit | ✅ Borrow checker prevents it |
| Null pointer dereference | ❌ Segfault | ✅ `Option<T>` forces handling |
| Race condition | ❌ Hard to detect | ✅ Send/Sync traits block compilation |
| Memory leak | ❌ Common | ✅ RAII auto-releases memory |

**Practical outcome**: No high-severity CVEs related to memory bugs in Nexus's history.

---

## 🌐 Network Connection Security

### SSH Security
- **Key-based authentication** recommended; password authentication can be disabled
- **Known hosts verification** — prevents MITM attacks
- **Connection pooling** with periodic health checks

### HTTP API Security (isman)
- All requests go through authentication middleware
- Input validation on every endpoint
- Error responses do not leak system internals

---

## 📊 Monitoring and Anomaly Detection

| Event | Action |
|-------|--------|
| Repeated login failures | Increasing delay, alert, lockout after N attempts |
| Abnormal DB2 query volume (above threshold) | Warning log, operator notification |
| Ingenium server unresponsive | Immediate alert, failover if configured |
| Credential decryption failure | Security alert — specific reason not disclosed in response |

---

## ✅ Deployment Security Checklist

| Item | Default Status |
|------|----------------|
| Credentials stored as AES-256-GCM ciphertext | ✅ Mandatory |
| No plaintext in any log output | ✅ Mandatory |
| SSH using key pairs instead of passwords | 🔶 Recommended |
| Restrictive file permissions on credential store | ✅ Mandatory |
| Audit log for sensitive operations | ✅ Mandatory |
| Network segmentation (isman not publicly exposed) | 🔶 Recommended |
| Regular credential rotation | 🔶 Recommended |
| Encrypted backup of credential store | 🔶 Recommended |

---

## 📄 Legal Notice

This document is provided for informational and advisory purposes only. All trademarks are the property of their respective owners. This project has no affiliation with DXC Technology, Sun Life, or any other third parties mentioned herein.
