---
sidebar_position: 9
---

# Binean Nova — VS Code Extension

The **Binean Nova** extension transforms Visual Studio Code into a complete development hub for the Ingenium insurance system. It integrates building, debugging, server management, and change tracking into a single interface.

---

## Installation

1. Search for **"Binean Nova"** in the VS Code Marketplace and install
2. Run **"Binean Nova: Initialize Environment"** from the Command Palette (`Ctrl+Shift+P`)
3. Always launch VS Code from the **"Binean Nova"** desktop shortcut for the correct environment

### Prerequisites

- **Windows** operating system
- **Rocket COBOL** extension (prompted on first launch)
- **Visual COBOL** compiler
- **IBM DB2** server or client

---

## Key Features

### Build — Ctrl+Shift+B

Compile all modified COBOL files with a single keystroke. The build:

- Detects all changed files automatically
- Compiles in parallel for maximum speed
- Shows results in the VS Code build panel
- Stops active debug sessions before building

### Debug — F5

Debug COBOL programs directly in VS Code:

| Configuration | Use Case |
|---------------|----------|
| **Ingenium Online Debug** | Interactive program debugging |
| **Ingenium Batch Debug** | Batch job debugging |

Set breakpoints, inspect variables, and step through code — just like any modern language.

### Activity Bar — Nova Panel

The **Binean Nova** tab in the Activity Bar provides three views:

#### Changes View

Tracks file differences between your **Baseline (BSL)** and **Development (DEV)** repositories:

- See added, modified, deleted, and renamed files
- Open side-by-side diffs (read-only baseline vs development)
- Auto-refreshes every 1.5 seconds

#### Items View

Manages branches merged since the last golden point:

- Create new branches with standardized naming
- Copy branch names, merge commands, or merge scripts

#### Ingenium Management View

Monitor and control Ingenium servers and policy operations:

- **Servers**: View regions and workers, start/stop regions
- **Policy Tasks**: Track export, import, and copy operations with live status

---

## Setup Commands

| Command | Description |
|---------|-------------|
| **Setup Nova Environment** | Create the Nova directory structure and desktop shortcut |
| **Initialize Ingenium Workspace** | Scaffold `.vscode/` config files for a new project |

---

## Configuration

Settings are configured in `.vscode/settings.json`:

| Setting | Description |
|---------|-------------|
| `binean.nova.NOVA_INST_DIR` | Nova installation directory |
| `binean.nova.NOVA_DEV_DIR` | Development workspace path |
| `binean.nova.NOVA_DBNAME` | Database name |
| `binean.nova.NOVA_DBSCHEMA` | Database schema |
| `binean.nova.NOVA_DBUSER` | Database username |
| `binean.nova.NOVA_DBPASS` | Encrypted database password |
| `binean.nova.COBDIR` | Visual COBOL installation directory |
| `binean.nova.DB2PATH` | DB2 installation directory |

:::tip
Encrypt your database password with `nexus encrypt <password>` and paste the output as `NOVA_DBPASS`. See the [nexus guide](./nexus).
:::

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+Shift+B` | Build all modified files |
| `F5` | Start debugging |
| `Ctrl+Shift+D` | Open Run and Debug view |
| `Ctrl+Shift+P` | Open Command Palette |

---

## Companion CLI Tools

The extension works alongside these command-line tools:

| Tool | Purpose |
|------|---------|
| [`icomp`](./icomp) | COBOL compiler — used by the build system |
| [`iman`](./iman) | Server manager — starts/stops the management server |
| [`isman`](./isman) | HTTP API — provides data for the sidebar views |
| [`nexus`](./nexus) | Utilities — encrypts database passwords |
| [`benova`](./benova) | Environment setup — configures workspace |
