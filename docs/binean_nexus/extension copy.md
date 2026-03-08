# 🧩 VS Code Extension — Nexus

> **"The ideal development environment is one where developers do not memorize commands — they focus entirely on business logic."**

---

## Integrated Directly Into Your IDE

The Nexus VS Code Extension brings the full power of the Nexus toolchain directly into the IDE your team uses every day — no context-switching, no remembering command syntax.

---

## 🖥️ Multi-Platform Support

The extension runs natively on every environment that Ingenium teams require:

| Platform | Support | Notes |
|----------|---------|-------|
| **Windows** | ✅ Full | Most common dev environment |
| **WSL (Windows Subsystem for Linux)** | ✅ Full | Perfect bridge between Windows and Linux |
| **Linux** | ✅ Full | Production server — identical behavior |
| **Remote SSH** | ✅ Full | Via VS Code Remote SSH extension |

---

## 📋 Prerequisites

1. **VS Code** version 1.80 or later
2. **Nexus CLI** installed and available in PATH
3. **Initialized workspace** via `nexus init` (a `nexus.json` file must exist)
4. For WSL: install the extension inside the WSL environment, not on Windows

---

## 📦 Components

### Nexus Core
The backbone of the extension — manages workspace lifecycle, reads configuration, and coordinates all other components.

**Features:**
- Automatically detects `nexus.json` when a workspace is opened
- Validates configuration and immediately warns if information is missing
- Provides context for all other commands
- Manages connection state to the isman server

### icomp / `igo`
Integrates the intelligent COBOL compiler directly into VS Code.

**Features:**
- **Compile on save** — optional automatic compilation when a file is saved
- **Problem panel integration** — compilation errors appear directly in the Problems tab
- **Go-to-error** — click an error to jump to the exact line in the COBOL file
- **Build history** — view past compilation runs and compare results

### iman
Manage Ingenium instances directly from VS Code — no separate terminal needed.

**Features:**
- **Tree view** showing the Ingenium environment structure
- **One-click operations** — start/stop processes, refresh data
- **Integrated log viewer** — view Ingenium logs with syntax highlighting
- **Status bar indicator** — server status permanently visible in the status bar

### ibatch
Create, manage, and monitor overnight batch jobs.

**Features:**
- **Visual scheduler** — graphical interface for configuring run schedules
- **Job monitoring** — real-time progress tracking
- **Alert integration** — receive notifications on job success or failure
- **History and logs** — comprehensive history for compliance requirements

---

## 🚀 Key Commands

### Initialize Workspace

```
Ctrl+Shift+P → "Nexus: Initialize Workspace"
```

Initializes the Nexus environment in the current workspace:
1. Creates `nexus.json` with a configuration template
2. Guides you step-by-step through filling in server details
3. Validates the connection as soon as configuration is complete
4. Creates a `.gitignore` entry to protect credentials

### Update Configuration

```
Ctrl+Shift+P → "Nexus: Update Configuration"
```

Safely updates configuration without manually editing JSON:
- Validates all input before saving
- Automatically encrypts credentials
- Leaves no plaintext anywhere on disk

---

## 💡 Real-World Benefits

| Without the Extension | With Nexus Extension |
|----------------------|---------------------|
| Memorize terminal command syntax | Click a button in VS Code |
| Compile manually, check logs separately | Errors appear inline in the editor |
| Multiple terminals for multiple tools | Everything integrated in one IDE |
| No server status visibility | Status bar always visible |
| Complex batch scripts | Visual scheduler |

---

## 📄 Legal Notice

This document is provided for informational and advisory purposes only. All trademarks are the property of their respective owners. This project has no affiliation with DXC Technology, Sun Life, or any other third parties mentioned herein.
