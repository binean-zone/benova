---
sidebar_position: 5
---

# isman — Management Server

`isman` is the HTTP management server that powers Ingenium server monitoring, policy operations, and automation. It runs as a background service and provides a REST API consumed by the VS Code extension and CLI tools.

:::info
You typically don't interact with `isman` directly. Use `iman start` to launch it and the VS Code extension to interact with it.
:::

---

## Starting the Server

`isman` is launched by `iman`:

```bash
iman start       # Find port and launch
iman start -f    # Force restart
```

Or manually (for troubleshooting):

```bash
isman <PORT>
```

---

## API Overview

### Health & Lifecycle

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/ping` | Health check — returns `"pong"` |
| POST | `/shutdown` | Graceful server shutdown |

### Ingenium Server Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/ing/regions` | List all configured regions with status |
| GET | `/ing/region/{name}/workers` | List workers in a specific region |
| POST | `/ing/region/{name}/start` | Start Ingenium for a region |
| POST | `/ing/region/{name}/stop` | Stop Ingenium for a region |

### Policy Operations

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/ipol/tasks` | List all policy tasks |
| POST | `/ipol/export` | Create a policy export task |
| POST | `/ipol/import` | Create a policy import task |
| POST | `/ipol/copy` | Create a policy copy task |
| POST | `/ipol/download` | Download a policy archive from remote |
| POST | `/ipol/upload` | Upload a policy archive to remote |

---

## Configuration

`isman` reads its configuration from `~/.nova/cfg/iman.toml`:

```toml
[iman]
name = "local"
max_threads = 4

# Define database regions
[[iman.regions]]
name = "DEV"
dbname = "DEVDB"
dbschema = "DEVSCHEMA"
dbuser = "devuser"
dbpass = "Bencrypted_password"

# Define remote servers (optional)
[[iman.remotes]]
name = "PROD"
host = "prod-server"
port = 22
user = "admin"
key_path = "~/.ssh/id_rsa"

# Policy table definitions
[iman.policy]
export_tables = "export_tables.csv"
delete_tables = "delete_tables.csv"
import_tables = "import_tables.csv"
```

### Regions

Each region represents a database environment (DEV, ST, AT, PROD). The server connects to each region's DB2 database on startup.

:::note
Database passwords must be encrypted using `nexus encrypt`. See the [nexus guide](./nexus) for details.
:::

### Remotes

Remote servers are accessed via SSH for cross-environment operations like policy copy. SSH keys are the recommended authentication method.

---

## Policy Task System

Policy tasks follow a lifecycle managed by a background scheduler:

```
 New  →  Waiting  →  Active  →  Processing  →  Done
                                              →  Error
```

1. **New**: Task created via API request
2. **Waiting**: Queued for processing
3. **Active**: Picked up by the scheduler
4. **Processing**: Operation in progress
5. **Done / Error**: Completed or failed

The scheduler polls for new tasks every 5 seconds. You can monitor task progress in the VS Code extension's **Ingenium Management** panel.

---

## Single Instance

Only one `isman` instance can run at a time, enforced by a file lock at `~/.nova/isman/.lock`.

## Log File

Server activity is logged to `~/.nova/isman/logs/isman.log`.
