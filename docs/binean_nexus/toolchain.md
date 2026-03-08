# 🛠️ The Nexus Toolchain

> **"Every hour spent waiting on compilation is an hour delivering zero value to your customers."**

---

## Problems Nexus Was Built to Solve

Before Nexus, IT teams at Ingenium-based insurers faced the same daily grind:

- ⏳ Manual COBOL compilation consuming **hours** per change
- 🔁 Copy-pasting commands between dev machine and server — the root of every "works on my machine" incident
- 🔒 DB2 and SSH passwords spread across config files — a compliance violation waiting to be discovered
- 📦 Manual policy migration between environments — error-prone, undocumented, high-stakes
- 🌩️ No reliable tool for automated overnight batch processing
- 👁️ No insight into what is actually running in production

Nexus solves **all of these** with a suite of purpose-built tools.

---

## ⚡ `icomp` — The Intelligent Compiler

A next-generation COBOL compilation system for Ingenium — from hours to **minutes**, from risky manual commands to **zero human error**.

### Why Is icomp So Fast?

| Old Problem | icomp Solution | Result |
|-------------|----------------|--------|
| Sequential, file-by-file compilation | **Dependency graph analysis** — maximum parallel compilation | 5–10x faster |
| No knowledge of what needs recompiling | **Intelligent change detection** — only recompile what was affected | No wasted work |
| Long manual commands, easy to mistype | **Simple single-command API** | Zero user error |

### Key Features

- 🔍 **COBOL dependency analysis** — automatically determines compilation order and scope
- 🚀 **Parallel compilation** — takes full advantage of all available CPU cores
- 📊 **Detailed reporting** — timing, results, and error list with full context
- 🔄 **Incremental builds** — only rebuild what has genuinely changed

---

## 🖥️ `iman` — Ingenium Manager

A unified CLI for all Ingenium operations, **working identically** on Windows and Linux — no differences, no surprises.

| Feature | Windows | Linux (Production) |
|---------|---------|---------------------|
| Ingenium process management | ✅ | ✅ |
| File system operations | ✅ | ✅ |
| DB2 interaction | ✅ | ✅ |
| COBOL artifact management | ✅ | ✅ |
| Remote server management | ✅ via SSH | ✅ native |

---

## 🌐 `isman` — Management Server

The central management server enabling **automation, monitoring, and external integration** without manual server logins.

### isman Architecture

```
Dashboard / CI/CD
       │
       │ REST API
       ▼
┌─────────────────┐
│   isman server  │
│   (Axum/Tokio)  │
├─────────────────┤
│  Policy Service │──────▶ Ingenium Environments
│  Batch Scheduler│──────▶ Overnight Jobs
│  Health Monitor │──────▶ Alerts & Notifications
└─────────────────┘
```

### Key Features

| Feature | Description |
|---------|-------------|
| **REST API** | Every operation has an API endpoint — easy CI/CD and dashboard integration |
| **Built-in scheduler** | Schedule batch jobs without a separate cron system |
| **Health monitoring** | Tracks Ingenium server uptime, alerts on anomalies |
| **Zero-downtime config reload** | Hot-reload configuration without restart |
| **Connection pooling** | Efficient SSH and DB2 connection reuse for maximum throughput |

---

## 📋 `ipol` — Policy Manager

A specialized wrapper over `isman` for **safely copying policies between environments** with full control and validation.

### Example Workflow

```bash
# Copy a policy from TEST to PROD
ipol copy --from test --to prod --id POL-2024-001

# Export all policy artifacts for backup
ipol export --env test --out ./exports/daily-backup.tar.zst

# Import policies into a new environment
ipol import --env prod --file ./exports/daily-backup.tar.zst
```

---

## 🧩 `nexus` CLI — Environment Orchestrator

The core tool for initializing and managing the entire Nexus environment configuration — **one command to start everything**.

```bash
# Initialize a new workspace
nexus init

# Check the status of all connections
nexus status

# Manage connection credentials (AES-256-GCM encrypted)
nexus credentials add
nexus credentials list
```

---

## 🔄 A Typical Day With Nexus

```
     Morning
         │
         ▼
┌──────────────────┐
│  nexus status    │ ← Verify all servers are online
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Code → icomp    │ ← Compile changes (10x faster)
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  iman test       │ ← Run tests against dev environment
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  ipol copy       │ ← Promote policies to staging/prod
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  isman monitor   │ ← Watch production health
└──────────────────┘
```

---

## 📄 Legal Notice

This document is provided for informational and advisory purposes only. All trademarks are the property of their respective owners. This project has no affiliation with DXC Technology, Sun Life, or any other third parties mentioned herein.
