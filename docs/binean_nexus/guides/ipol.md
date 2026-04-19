---
sidebar_position: 6
---

# ipol — Policy Manager

`ipol` manages insurance policy data migration between environments. It provides commands to export, import, copy, and transfer policy records stored in DB2 databases.

---

## Commands

### Export a Policy

```bash
ipol export --region <REGION> --id <POLICY_ID> [--tag <TAG>]
```

Exports a policy's data from a DB2 database into a compressed archive file (`.ixf.tar.zst`).

**Example:**
```bash
ipol export --region DEV --id POL-2024-001 --tag backup-v1
```

### Import a Policy

```bash
ipol import --region <REGION> --file <ARCHIVE_PATH>
```

Imports a policy archive into a target database environment.

**Example:**
```bash
ipol import --region ST --file ./exports/policy_POL001_backup.ixf.tar.zst
```

### Copy a Policy Between Environments

```bash
ipol copy --from <SOURCE_REGION> --to <DEST_REGION> --id <POLICY_ID>
```

Copies a policy from one environment to another. This combines export + transfer + import in a single operation.

**Example:**
```bash
ipol copy --from DEV --to ST --id POL-2024-001
```

### Download a Policy Archive from Remote

```bash
ipol download --region <REGION> --id <POLICY_ID>
```

Downloads a policy archive from a remote server to your local machine.

### Check Task Status

```bash
ipol task
```

Lists all policy tasks and their current status.

### List Available Regions

```bash
ipol regions
```

Lists all configured regions from the `iman.toml` configuration.

---

## How Policy Migration Works

### Export Process

1. Reads the table list from CSV configuration
2. For each table, generates a SQL query using the policy ID
3. Exports each table's data to IXF format using DB2
4. Creates metadata (`meta.toml`) with record counts
5. Compresses everything into a `.ixf.tar.zst` archive

### Import Process

1. Decompresses the archive
2. Reads metadata to identify the source policy
3. Deletes existing data for that policy in the target database
4. Imports each IXF file into the corresponding table
5. Retries failed tables (up to 3 attempts)
6. Verifies import counts match the export

### Copy Scenarios

| Source | Destination | What Happens |
|--------|-------------|-------------|
| Local | Local | Export → Import (direct) |
| Local | Remote | Export → Upload → Import on remote |
| Remote | Local | Download → Import locally |
| Remote | Remote | Download → Upload → Import on remote |

---

## Archive Format

Each policy archive contains:

```
policy_POL001_backup.ixf.tar.zst
├── meta.toml          # Metadata (table count, record count, source)
├── POLICY.ixf         # Table data in IXF format
├── COVERAGE.ixf
├── PREMIUM.ixf
├── ...
├── POLICY_export.msg  # Export messages
└── POLICY_delete.sql  # Generated cleanup SQL
```

---

## Task Monitoring

Policy operations run as background tasks on the `isman` server. You can monitor their progress:

- **VS Code**: Open the **Ingenium Management** panel → **Policy Tasks** section
- **CLI**: Run `ipol task` to list all tasks

Each task shows its current status: New, Waiting, Active, Processing, Done, or Error.

:::tip
For most day-to-day work, use the VS Code extension's sidebar to manage policies — it provides a visual task tracker with live status updates.
:::
