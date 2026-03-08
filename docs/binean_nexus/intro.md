# 🌐 Nexus – Foundation of Connection

---

## 🎯 Overview

**Nexus** is the first and most critical phase of the **Binean Nova** transformation roadmap. It establishes the digital foundation upon which the entire modernization journey is built — a robust DevOps infrastructure, intelligent automation toolchain, and a unified management platform for the Ingenium insurance core system.

> **"Before you can transform the engine, you need a world-class workshop."**

Nexus doesn't just prepare the ground — it delivers **immediate, tangible value** from day one. While future phases (Orbit, Vista, Apex) will modernize business logic and user experience, Nexus solves the most urgent operational pain points that insurance enterprises face today:

- ⏱️ **Hours of manual deployment → Minutes of automated delivery**
- 🔧 **Fragmented, error-prone tooling → Unified, intelligent DevOps**
- 🔒 **Ad-hoc security → Enterprise-grade encryption and access control**
- 📊 **Zero visibility → Real-time system monitoring and health checks**

---

## 💡 Why Nexus Matters

In the insurance industry, every minute of downtime directly impacts revenue and customer trust. Legacy systems like Ingenium demand a disproportionate amount of manual effort for routine operations — compilation, deployment, environment setup, and system monitoring.

**Nexus eliminates this operational tax** by providing:

| Challenge | Nexus Solution |
|-----------|---------------|
| Manual COBOL compilation across environments | **Intelligent compilation** with Git-aware incremental builds |
| Environment setup is complex and error-prone | **One-click workspace initialization** via VS Code Extension |
| No centralized management for distributed systems | **Unified management server** with REST API and job scheduling |
| Deployment across servers requires SSH expertise | **Automated policy-based deployment** across any number of targets |
| Database passwords stored in plain text | **Military-grade AES-256-GCM encryption** for all credentials |
| No visibility into system health | **Built-in health monitoring** with uptime tracking |

---

## 🏗️ Architecture at a Glance

Nexus is built as a **modular Rust workspace** — a collection of specialized tools that work independently yet integrate seamlessly. This design ensures that each component can be deployed and upgraded without disrupting others.

```
┌─────────────────────────────────────────────────────┐
│                   VS Code Extension                  │
│            (Developer's Command Center)              │
└────────┬──────────────────────────────────┬─────────┘
         │                                  │
    ┌────▼────┐                       ┌─────▼─────┐
    │  nexus   │                       │   icomp   │
    │  (CLI)   │                       │ (Compiler)│
    └────┬────┘                       └───────────┘
         │
    ┌────▼──────────────────────────────────────────┐
    │              isman (Management Server)         │
    │    ┌──────┐  ┌──────┐  ┌────────┐  ┌──────┐  │
    │    │ ipol │  │  ing │  │  jobs  │  │ base │  │
    │    └──┬───┘  └──┬───┘  └───┬────┘  └──────┘  │
    └───────┼─────────┼──────────┼──────────────────┘
            │         │          │
    ┌───────▼─────────▼──────────▼──────────────────┐
    │              Core Library                       │
    │  Terminal | DB2 | Crypto | SSH | Process Pool   │
    └─────────────────────────────────────────────────┘
```

---

## 🧩 Key Components

### 🔧 Core Library
The foundation layer providing universal capabilities: **terminal abstraction** (local & SSH), **DB2 database integration**, **AES-256-GCM encryption**, **parallel execution engine**, and **cross-platform process management**. Every tool in the Nexus ecosystem is built on this battle-tested core.

### 🖥️ Nexus CLI
The environment orchestrator that ties everything together. It manages configurations across Dev, ST, AT, and Production environments, coordinating tool execution and system-wide operations.

### ⚙️ icomp – Intelligent Compiler
A Git-aware compilation engine that analyzes code changes between branches to perform **incremental builds** — compiling only what has changed and its dependencies. This dramatically reduces build times from hours to minutes.

### 🏢 isman – Management Server
A high-performance HTTP server (powered by Axum) that serves as the **central nervous system** for Ingenium operations:
- **Policy management** with full lifecycle tracking
- **Automated job scheduling** with configurable thread pools
- **Remote system orchestration** via SSH terminal pools
- **Health monitoring** with real-time status endpoints

### 📦 ipol – Policy Engine
Manages the complete policy lifecycle: export, import, copy, and deploy across environments. Supports compressed artifact transfer and maintains a full audit trail of all operations.

### 🔌 VS Code Extension
Transforms VS Code into a **dedicated Ingenium development environment** — workspace initialization, configuration management, and seamless integration with all Nexus tools.

---

## ⚡ Built with Rust

Nexus is written entirely in **Rust** — the language trusted by industry leaders like AWS, Google, Microsoft, and Cloudflare for performance-critical infrastructure. This choice delivers:

- **Zero-cost abstractions** — High-level code with low-level performance
- **Memory safety without garbage collection** — No runtime overhead, no memory leaks
- **Fearless concurrency** — Safe parallel execution guaranteed at compile time
- **Single binary deployment** — No runtime dependencies, no version conflicts

> Rust has been voted the **#1 most loved programming language** for 8 consecutive years in the Stack Overflow Developer Survey, reflecting a mature ecosystem and thriving community.

---

## 🚀 Getting Started

Nexus is designed for rapid adoption:

1. **Install the VS Code Extension** — Your gateway to the Nexus ecosystem
2. **Initialize your workspace** — One command sets up your entire development environment
3. **Start building** — Compile, deploy, and manage with intelligent automation

For cloud migration requirements, see [ING on Cloud](./ing_on_cloud).  
For detailed extension features, see [VS Code Extension](./extension).

---

## 📄 Legal Disclaimer

This document is provided for reference and consulting purposes regarding system integration and transformation solutions.  
All trademarks, product names, and company names mentioned herein are the property of their respective owners.  
This project is not affiliated with, sponsored by, or endorsed by DXC Technology, Sun Life, or any other third party mentioned.
