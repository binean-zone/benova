---
sidebar_position: 1
---

# Nexus Tools — User Guide

Welcome to the **Nexus Toolchain** user guide. This section provides practical, step-by-step instructions for using each tool in the Nexus suite.

## What is the Nexus Toolchain?

The Nexus Toolchain is a collection of purpose-built tools that automate the daily tasks of Ingenium development teams — from compiling COBOL code to managing servers and migrating insurance policies between environments.

All tools are designed to work together seamlessly, with the **Binean Nova VS Code Extension** as the central interface.

---

## Tools at a Glance

| Tool | Purpose | Who Uses It |
|------|---------|-------------|
| [**benova**](./benova) | Set up development environment | Developers |
| [**icomp**](./icomp) | Compile COBOL source code | Developers |
| [**iman**](./iman) | Manage the isman server process | Developers, DevOps |
| [**isman**](./isman) | HTTP management server (API) | Automated / Extension |
| [**ipol**](./ipol) | Policy export, import, and copy | Business Analysts, DevOps |
| [**nexus**](./nexus) | Encrypt, decrypt, and hash utilities | Developers, DevOps |
| [**itun**](./itun) | SSH tunnel management | DevOps |
| [**VS Code Extension**](./extension) | Integrated development hub | Developers |

---

## Getting Started

### 1. Install the Environment

Run `benova dev` to open VS Code with all environment variables configured automatically. See the [benova guide](./benova) for details.

### 2. Build Your Code

Use `Ctrl+Shift+B` in VS Code, or run `icomp build` from the terminal. See the [icomp guide](./icomp) for all compilation options.

### 3. Manage Servers

Start the management server with `iman start`, then monitor everything from the VS Code sidebar. See the [iman guide](./iman).

### 4. Work with Policies

Export, import, or copy insurance policies between environments using the policy task system. See the [ipol guide](./ipol).

---

## Prerequisites

Before using any Nexus tool, ensure you have:

- **Windows** operating system (Linux supported for server deployment)
- **Visual COBOL** compiler installed
- **IBM DB2** server or client
- **Nova configuration** files in `~/.nova/cfg/` (created during setup)

:::tip
All tools read their configuration from `~/.nova/cfg/nova.toml` and `~/.nova/cfg/ing.toml`. You only need to configure these files once.
:::
