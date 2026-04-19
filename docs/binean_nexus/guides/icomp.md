---
sidebar_position: 3
---

# icomp — Intelligent COBOL Compiler

`icomp` is the intelligent compilation tool for Ingenium COBOL source code. It automates dependency analysis, parallel compilation, and DB2 package binding — reducing build times from hours to minutes.

---

## Quick Start

```bash
# Build all changes since last successful build
icomp build

# Compile specific files
icomp comp program1.cbl program2.cbl

# Full recompilation of everything
icomp mass
```

---

## Commands

### `build` — Incremental Build (Most Common)

```bash
icomp build
```

The recommended way to compile. `icomp build` automatically:

1. Detects what has changed since the last successful build (the "golden point")
2. Scans COBOL copybook dependencies to find all impacted programs
3. Compiles only the affected programs — in parallel
4. Binds any changed DB2 packages

This is the command triggered by **Ctrl+Shift+B** in VS Code.

### `comp` — Compile Specific Files

```bash
icomp comp <file1> [file2] [file3] ...
```

Compiles one or more specific COBOL files. Use this when you want to quickly test a single program without running the full build pipeline.

**Example:**
```bash
icomp comp POLICY01.cbl CLAIM02.cbl
```

### `mass` — Full Recompilation

```bash
icomp mass
```

Recompiles **every** source file from scratch and rebinds all DB2 packages. Use this when:

- Setting up a new environment
- The incremental build is producing unexpected results
- It's been more than 30 days since the last mass compile

:::warning
Mass compilation takes significantly longer than incremental builds. Only use it when necessary.
:::

### `bind` — Bind DB2 Packages

```bash
icomp bind
```

Drops and rebinds all DB2 packages. Useful after database schema changes.

### `git` — Pull and Merge from Baseline

```bash
icomp git
```

Pulls the latest changes from the baseline repository and merges them into your development branch.

### `golden` — View or Set Golden Point

```bash
# View current golden point
icomp golden

# Set a specific golden point
icomp golden <commit-sha>
```

The golden point marks the last successfully compiled commit. `icomp build` uses this to determine what has changed.

### `branch` — Show Current Branches

```bash
icomp branch
```

Displays the current baseline (BSL) and development (DEV) branch names.

### `list` — List Merged Branches

```bash
icomp list
```

Lists all branches that have been merged since the golden point.

### `create` — Create a Feature Branch

```bash
icomp create <name> <id> <category>
```

Creates a new feature branch in the development repository with standardized naming.

### `clean` — Clean Build Artifacts

```bash
icomp clean
```

Removes all compiled outputs, logs, and temporary files.

---

## How Incremental Build Works

```
Golden Point (last good build)
        │
        ▼
  ┌─────────────┐
  │  Git Diff    │  What changed since golden point?
  └──────┬──────┘
         │
         ▼
  ┌─────────────┐
  │  Copybook    │  Which programs use the changed copybooks?
  │  Scanner     │
  └──────┬──────┘
         │
         ▼
  ┌─────────────┐
  │  Parallel    │  Compile all impacted programs at once
  │  Compile     │
  └──────┬──────┘
         │
         ▼
  ┌─────────────┐
  │  DB2 Bind    │  Bind changed packages
  └──────┬──────┘
         │
         ▼
  Update golden point ✓
```

---

## Key Concepts

### Golden Point

A commit SHA stored in `BSL/golden.lst` that marks the last successful build. Every `icomp build` compares against this point to determine what needs recompilation.

### Precompiled Programs

Programs that access DB2 require special compilation options (precompilation). `icomp` automatically handles this based on the `NING_PRECOMPS` environment variable.

### Parallel Compilation

`icomp` uses all available CPU cores for compilation. The number of concurrent workers is controlled by the `NING_MAX_WORKERS` environment variable.

---

## Single Instance

Only one `icomp` instance can run at a time. If you try to start a second instance, it will exit immediately. This prevents conflicting builds.
