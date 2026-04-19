---
sidebar_position: 4
---

# iman — Ingenium Manager

`iman` is the CLI tool for managing the `isman` management server. It provides simple commands to start, stop, and check the status of the server process.

---

## Commands

### Start the Server

```bash
iman start [--force|-f]
```

Starts the `isman` HTTP server. The tool automatically finds an available port (starting from 3000) and launches the server in the background.

| Option | Description |
|--------|-------------|
| `--force`, `-f` | Stop any existing server before starting a new one |

**Example:**
```bash
# Start the server (uses existing if already running)
iman start

# Force restart
iman start --force
```

The command prints the port number on success (e.g., `3000`).

### Stop the Server

```bash
iman stop
```

Gracefully shuts down the running `isman` server. If the server doesn't stop within 5 seconds, it is force-terminated.

### Check Current Port

```bash
iman port
```

Prints the port number of the currently running `isman` instance, or `0` if no instance is running.

---

## How It Works

`iman` acts as the bridge between you (or the VS Code extension) and the `isman` HTTP server:

```
You / VS Code Extension
        │
        ├── iman start  →  Launches isman process
        ├── iman port   →  Finds running isman port
        └── iman stop   →  Sends shutdown signal
                │
                ▼
        isman HTTP Server (background)
```

### Startup Process

1. Check if an instance is already running (returns its port)
2. Find an available port starting from `IMAN_START_PORT` (default: 3000)
3. Spawn `isman` as a background process
4. Redirect logs to `~/.nova/isman/logs/isman.log`
5. Wait for the server to become ready (up to 5 seconds)
6. Print the port number

### Shutdown Process

1. Find the current server port
2. Send HTTP POST to `/shutdown` for graceful shutdown
3. Wait up to 5 seconds for the process to exit
4. Force-terminate if still running

---

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NOVA_HOME` | Nova home directory | Required |
| `IMAN_START_PORT` | Starting port to search from | `3000` |

---

## Log File

Server logs are written to:

```
~/.nova/isman/logs/isman.log
```

Check this file when troubleshooting server startup issues.

:::tip
In most cases, you don't need to run `iman` commands directly. The **Binean Nova VS Code Extension** manages the server automatically — just click "Start Ingenium Management" in the sidebar.
:::
