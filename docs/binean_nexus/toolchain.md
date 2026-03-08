# 🛠️ Nexus Toolchain

---

## 🎯 A Complete DevOps Ecosystem

The Nexus Toolchain is a suite of purpose-built tools that together form a **complete DevOps ecosystem** for Ingenium insurance systems. Each tool solves a specific operational challenge, and all share a common foundation — the Nexus Core Library.

> **One platform. Every workflow. From code to production.**

---

## ⚙️ icomp — Intelligent Compiler

### The Problem
Compiling an Ingenium system is one of the most time-consuming and error-prone tasks in the development lifecycle. A typical full build involves hundreds of COBOL programs with complex interdependencies. Traditional approaches require developers to manually identify which programs need recompilation — a process that is slow, unreliable, and dependent on tribal knowledge.

### The Solution
**icomp** is a Git-aware intelligent compilation engine that **automatically analyzes code changes** between branches to determine exactly which programs need to be rebuilt.

### How It Works

```
  Git Repository
       │
       ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Diff Analysis│────▶│  Dependency  │────▶│  Incremental │
│  (Git Branch) │     │   Graph      │     │    Build     │
└──────────────┘     └──────────────┘     └──────────────┘
```

1. **Change Detection** — Compares the current branch against a target (e.g., `main`) to identify modified files
2. **Dependency Resolution** — Traverses the COBOL program dependency graph to find all impacted programs
3. **Incremental Build** — Compiles only the affected programs and their dependents

### Key Benefits

| Metric | Traditional | With icomp |
|--------|------------|------------|
| Build scope | Full rebuild (100%) | Only changed + dependents (~5-15%) |
| Build time | Hours | Minutes |
| Human error risk | High (manual selection) | Zero (automated analysis) |
| Git integration | None | Native branch comparison |

### Developer Experience
- Runs directly from VS Code or command line
- Clear progress reporting with error/warning counts
- Outputs compatible with VS Code's Problem panel for instant error navigation

---

## 🏢 iman — Ingenium Manager

### The Problem
Managing Ingenium's COBOL worker processes across development and production environments requires deep platform-specific knowledge. On Windows, developers need debug-mode workers that integrate with IDE debuggers. On Linux, operations teams need multiple parallel workers with configurable instance counts.

### The Solution
**iman** provides unified worker management across all platforms, with environment-appropriate behavior.

### Capabilities

#### Development (Windows)
- **Single debug worker** — Launches one worker process in debug mode
- **Debugger integration** — Automatically attaches to the Rocket COBOL extension for step-through debugging
- **Instant feedback** — See COBOL execution in real-time within VS Code

#### Production (Linux)
- **Parallel workers** — Launch N worker processes simultaneously (configurable)
- **Process management** — Start, stop, and monitor all workers from a single command
- **Graceful shutdown** — Ensures all in-flight transactions complete before stopping

### Future: The Nova App Foundation
iman is strategically positioned as the foundation for **Nova App** — the next-generation insurance core. The Orbit phase roadmap includes:

- **MIR API** — Direct communication with PathFinder, bypassing MQ entirely
- **REST API** — Modern HTTP interface for new application integration  
- **24/7 Availability** — Query contract data even during batch processing
- **Autoscaling** — Automatically adjust worker count based on transaction volume

---

## 🌐 isman — Management Server

### The Problem
Operating an Ingenium system across multiple environments (Dev, ST, AT, Production) involves coordinating dozens of manual tasks: deploying policy updates, transferring artifacts between servers, scheduling jobs, and monitoring system health. There is no centralized control plane.

### The Solution
**isman** (Ingenium Management System) is a high-performance HTTP server that serves as the **central operations hub** for all Ingenium management tasks.

### Architecture Highlights

- **Built on Axum + Tokio** — Rust's premier async web stack, handling thousands of concurrent requests with minimal resource usage
- **Non-blocking I/O** — All database and file operations run on dedicated thread pools, never blocking the event loop
- **Terminal pool management** — Efficient reuse of local and SSH connections
- **Validated inputs** — Every request parameter is validated for safety and correctness

### Service Modules

#### 📦 Policy Management (ipol)
The policy module handles the complete lifecycle of insurance policy artifacts:

| Operation | Description |
|-----------|-------------|
| **Copy** | Transfer policy configuration between environments |
| **Export** | Package policy artifacts into compressed archives (.zst) |
| **Import** | Deploy policy archives to target environments |
| **Upload/Download** | Artifact transfer via HTTP for cross-network deployment |
| **Task Tracking** | Full audit trail of all policy operations |

#### 🔄 Ingenium Operations (ing)
Direct management of Ingenium service operations across remote servers.

#### ⏰ Job Scheduler
Automated recurring task execution:
- Configurable thread pool size
- Broadcast-based coordination
- Graceful shutdown support

#### 💓 System Health
- `/ping` — Simple connectivity check
- `/status` — Real-time health: uptime, system status

---

## 📦 ipol — Policy Manager (CLI)

For scenarios where a full management server isn't needed, **ipol** provides direct command-line access to policy operations:

```bash
# Copy policy from DEV to ST
ipol copy DEV ST POLICY_001

# Copy with a specific tag
ipol copy DEV ST POLICY_001 --tag v2.1
```

Ideal for:
- Quick one-off operations
- Scripted automation in CI/CD pipelines
- Environments where running a server is impractical

---

## 🖥️ nexus — Environment Orchestrator

The **nexus** CLI is the command-center that ties everything together:

- **Environment management** — Switch between Dev, ST, AT, Production configurations
- **Tool coordination** — Launch and configure other Nexus tools
- **Configuration generation** — Auto-generate environment-specific settings
- **License management** — Handle tool licensing and activation

---

## 🔌 benova — Developer Utilities

The **benova** CLI provides developer-facing utilities:

- **Development environment setup** — Configure local development dependencies
- **Configuration management** — Manage developer-specific settings and profiles
- **Environment variable management** — Simplified setup for complex build environments

---

## 🔗 How They Work Together

```
Developer's Daily Workflow:

1. Open VS Code → Extension initializes workspace
2. Write code → Git tracks changes automatically
3. Build → icomp compiles only what changed
4. Test locally → iman runs debug worker
5. Deploy to ST → isman/ipol copies policy to staging
6. Monitor → /status endpoint confirms system health
7. Promote to PROD → Same toolchain, different target
```

The power of the Nexus Toolchain lies not just in individual tools, but in how they **compose into a seamless workflow** — from the first line of code to production deployment, every step is automated, validated, and auditable.

---

## 📄 Legal Disclaimer

This document is provided for reference and consulting purposes regarding system integration and transformation solutions.  
All trademarks, product names, and company names mentioned herein are the property of their respective owners.  
This project is not affiliated with, sponsored by, or endorsed by DXC Technology, Sun Life, or any other third party mentioned.
