# Binean Nova VS Code Extension

---

## Introduction

The **Binean Nova Extension** turns VS Code into the primary working hub for Ingenium development and operations.

Nexus is used mainly by developers, so the first UI priority is a VS Code extension, not a separate web UI. This approach fits day-to-day work better and enables deeper integration with COBOL coding, build, and debugging flows.

The extension is not only an IDE add-on. It also acts as a practical UI layer for Nexus command-line tools and server-side management services.

---

## Why Extension-First (Instead of Web UI)

- The main Nexus users are developers working directly in code
- VS Code allows tighter integration with COBOL edit/build/debug workflows
- Commands, diagnostics, and diffs are available in one place without context switching
- The extension can orchestrate CLI workflows while still giving teams a friendly operational UI

---

## Role in the Nexus Architecture

At a high level:

- The extension prepares and standardizes Ingenium project setup
- After setup, developers can call Nexus tools from command line (best and most complete operational mode)
- On each machine running Ingenium, Nexus can start an `isman` manager service
- Developers use corresponding CLI tools to control those `isman` services
- The extension provides UI views for key `isman` operations so teams can monitor/control faster in VS Code

This model keeps CLI as the execution backbone while using VS Code as the daily control surface.

---

## Activity Bar - Nova Panel

The extension adds a dedicated **Binean Nova** panel in the VS Code Activity Bar with three practical views:

- **Changes**: track differences between the current branch and the baseline to support branch validation
- **Items**: manage test items and branch-level merge preparation workflows
- **Ingenium Management**: monitor and control server/database operations through the management layer

This panel gives developers an operational UI in VS Code while keeping CLI execution as the backbone.

---

## Core User Workflows

The extension focuses on the daily workflows developers use most:

- One-command environment initialization
- Smart build for changed COBOL files (including build shortcut flow)
- Single-file compile from editor context
- Integrated COBOL debugging flow
- Branch-aware change tracking (baseline vs current branch)
- Item/branch support for validation before merge
- Ingenium management views to start/stop services and monitor tasks
- Real-time database/policy task monitoring through the management layer

Detailed behavior, command list, and setup steps are maintained in extension documentation.

---

## Prerequisites and Detailed Setup

Prerequisites are maintained in the extension documentation and do not need to be duplicated in this page.

- VS Code Marketplace: [Binean Nova Extension](https://marketplace.visualstudio.com/items?itemName=Binean.binean-nova)
- User guide entry: [Extension Guide](/docs/binean_nexus/guides/extension)

---

## Scope of This Page

This page is an overview of the extension's role in Nexus.

Component-level technical details are intentionally documented in dedicated pages and guides.

---

## Summary

The Binean Nova VS Code Extension is the developer-first UI for Nexus:

- Deeply integrated with COBOL development workflows
- Designed to work with CLI-based operations, not replace them
- Provides practical UI views over `isman` and related operational tasks
- Reduces friction between coding, debugging, and environment operations