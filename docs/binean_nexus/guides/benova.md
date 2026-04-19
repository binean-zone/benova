---
sidebar_position: 2
---

# benova — Development Environment Setup

`benova` is a one-command tool that sets up your entire Ingenium development environment on Windows. It reads configuration files, sets all required environment variables, and launches your preferred development tool.

---

## Commands

### Open VS Code

```bash
benova dev [--env <ENV>]
```

Opens VS Code with all Ingenium environment variables pre-configured. This is the recommended way to start your development session.

**Example:**
```bash
# Open VS Code with the default environment
benova dev

# Open VS Code with a specific environment
benova dev --env ST
```

### Open Command Prompt

```bash
benova cli [--env <ENV>]
```

Opens an interactive command prompt with the full Ingenium environment. Useful when you need to run CLI tools directly.

**Example:**
```bash
# Open a terminal with default environment
benova cli

# Open a terminal with staging environment
benova cli --env ST
```

### Export Environment Variables

```bash
benova env [--env <ENV>] [--output <FILE>]
```

Exports all environment variables as `SET` commands. Useful for creating custom startup scripts.

**Example:**
```bash
# Print environment variables to screen
benova env

# Save to a .cmd file
benova env --output setup.cmd
```

---

## Configuration Files

`benova` reads from two configuration files located in `~/.nova/cfg/`:

### `nova.toml`

Contains the core Nova configuration:

```toml
[local]
nova_home = "C:\\Users\\yourname\\.nova"
nova_apps = "C:\\nova-apps"

[db2]
instance = "DB2INST"
path = "C:\\Program Files\\IBM\\SQLLIB"

[iman]
start_port = 3000
```

### `ing.toml`

Contains Ingenium compiler settings:

```toml
[ing]
cobdir = "C:\\Program Files\\Micro Focus\\Visual COBOL"
directives = "DIALECT(MF) COPYEXT(cpy,cbl)"
```

---

## What Happens Behind the Scenes

When you run `benova dev` or `benova cli`, the tool:

1. Reads `nova.toml` and `ing.toml` from `~/.nova/cfg/`
2. Loads additional environment files from `~/.nova/ingenium/`
3. Sets up environment variables (`NOVA_HOME`, `DB2INSTANCE`, `DB2PATH`, `COBDIR`, etc.)
4. Constructs and deduplicates the `PATH` variable
5. Launches VS Code or the command prompt

:::tip
You only need to configure these files once. After that, a single `benova dev` command gives you a fully configured workspace every time.
:::
