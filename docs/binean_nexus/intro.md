---
sidebar_position: 1
---

# Nexus — The Digital Foundation for Insurance Transformation

> **"Every day you spend on manual processes is a day your competitors are pulling further ahead."**

![Ingenium Architecture Diagram](/img/Nexus.png)

---

## The Problem You Face Every Day

If your organization runs Ingenium, you already know what it feels like:

- ⏳ COBOL compilation taking **hours** — for a single change
- 🔁 Copy-pasting commands between dev machine and server — the root cause of "works on my machine" incidents
- 🔒 DB2 and SSH passwords scattered across config files — a compliance nightmare waiting to happen
- 📦 Manual policy migration between environments — error-prone, undocumented, high-stakes
- 🌩️ No reliable toolchain for overnight batch processing automation
- 👁️ Zero visibility into what is actually running in production right now

These are not small inconveniences. They are strategic blockers preventing your IT team from delivering the speed the business demands.

---

## 🚀 Nexus — The Solution Built for Ingenium

Nexus is a **purpose-built DevOps toolchain** for organizations running Ingenium insurance core systems. Unlike generic DevOps tools that have to be bent and configured to fit Ingenium's quirks, Nexus was designed from day one to speak Ingenium's language.

| Your Current Challenge | Nexus Solution |
|------------------------|----------------|
| COBOL compilation takes hours | Smart parallel compiler with dependency analysis — **minutes, not hours** |
| Manual server operations | Unified CLI + VS Code extension with identical behavior on Windows and Linux |
| Credentials exposed in config files | AES-256-GCM military-grade encryption, stored securely, never logged |
| Policy migration is risky and manual | Automated policy copy/export/import with full validation |
| Batch scheduling is fragile | Built-in scheduler with monitoring and alerting |
| No visibility into production | Central management server (isman) with REST API and health monitoring |

---

## 📈 Real Results

**Sun Life Vietnam** completed a full Ingenium cloud migration in **9 months** using Nexus — on time, within budget, zero data loss.

| Metric | Before Nexus | After Nexus |
|--------|-------------|-------------|
| COBOL compilation time | Hours | Minutes |
| Deployment time | 1 hours | 1 minutes |
| Infrastructure uptime | Variable | 99.95% |
| Disaster recovery time | Unknown | 1 minutes |
| Infrastructure cost | Baseline | -40% |

---

## 🏗️ System Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│              VS Code Extension                       │
│         (Developer Command Center)                   │
└────────┬──────────────────────────────────┬─────────┘
         │                                  │
    ┌────▼────┐                       ┌─────▼─────┐
    │  nexus  │                       │   icomp   │
    │  (CLI)  │                       │(Compiler) │
    └────┬────┘                       └───────────┘
         │
    ┌────▼──────────────────────────────────────────┐
    │           isman (Management Server)            │
    │  ┌──────┐  ┌──────┐  ┌────────┐  ┌────────┐  │
    │  │ ipol │  │  ing │  │  jobs  │  │ health │  │
    └──┴──────┴──┴──────┴──┴────────┴──┴────────┘  │
                     │
    ┌────────────────▼────────────────────────────┐
    │           Core Library (Rust)                │
    │  Terminal | DB2 | AES-256 | SSH | Pool       │
    └─────────────────────────────────────────────┘
```

**Component Descriptions:**
- **VS Code Extension:** Developer Command Center for Ingenium projects
- **nexus (CLI):** Environment orchestration, workspace initialization, configuration, connection
- **icomp (Compiler):** Smart COBOL compiler, parallel and dependency-aware
- **isman (Management Server):** Central management, REST API, scheduling, monitoring
    - **ipol:** Policy lifecycle management (export, import, copy, deploy)
    - **ing:** Ingenium integration and orchestration
    - **jobs:** Batch job scheduling and automation
    - **health:** Real-time health monitoring and alerting
- **Core Library (Rust):** Terminal abstraction, DB2 integration, AES-256 encryption, SSH, resource pooling


---

## 🧩 Core Components

| Component | What It Does |
|-----------|-------------|
| **icomp** | Intelligent COBOL compiler — parallel, dependency-aware, fast |
| **iman** | Ingenium management CLI — works identically on Windows and Linux |
| **isman** | Central management server with REST API and scheduler |
| **ipol** | Policy lifecycle management — copy, export, import |
| **nexus CLI** | Environment orchestration — initialize, configure, connect |
| **VS Code Extension** | All of the above, integrated directly into your IDE |

---

## ⚡ Why Rust?

Nexus is built entirely in Rust — a deliberate choice that directly benefits you:

| Rust Advantage | Business Impact |
|----------------|-----------------|
| No runtime required | Single binary, zero installation complexity |
| Memory safe by design | No buffer overflow exploits, no CVEs from memory bugs |
| Native performance | Compilation speed equivalent to hand-optimized C |
| Cross-platform with identical behavior | Code developed on Windows runs identically on Linux production |
| Zero-cost abstractions | Low-level performance without unsafe code |

---

## 🛣️ Transformation Roadmap

| Phase | Timeline | Deliverable |
|-------|----------|-------------|
| **Assessment** | Week 1–2 | Audit current Ingenium setup, identify quick wins |
| **Foundation** | Week 3–6 | Deploy Nexus toolchain, train core team |
| **Acceleration** | Month 2–3 | Full CI/CD pipeline, automated batch scheduling |
| **Optimization** | Month 4+ | Performance tuning, cloud migration planning |

---

## 🚀 Getting Started

```bash
# Download and install Nexus CLI
# (follow platform-specific instructions in the Installation Guide)

# Initialize your workspace
nexus init

# Verify all connections
nexus status

# You're ready — open VS Code and start building
```

---

## 📄 Legal Notice

This document is provided for informational and advisory purposes only. All trademarks are the property of their respective owners. This project has no affiliation with DXC Technology, Sun Life, or any other third parties mentioned herein.
