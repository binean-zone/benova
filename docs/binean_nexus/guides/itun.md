---
sidebar_position: 8
---

# itun — SSH Tunnel Manager

`itun` creates SSH tunnels for securely forwarding ports between your local machine and remote servers. This is useful when you need to access remote services (like database ports) that are not directly reachable.

---

## Usage

```bash
itun <REGION> <LOCAL_PORT> <REMOTE_PORT>
```

| Argument | Description |
|----------|-------------|
| `REGION` | The remote server region name (as defined in `iman.toml`) |
| `LOCAL_PORT` | The port on your local machine |
| `REMOTE_PORT` | The port on the remote server |

**Example:**
```bash
# Forward local port 50000 to remote DB2 port 50000
itun PROD 50000 50000

# Forward local port 8080 to remote web service on port 3000
itun ST 8080 3000
```

---

## How It Works

`itun` reads the SSH configuration for the specified region from `iman.toml`, then establishes an SSH tunnel:

```
Your Machine                  Remote Server (PROD)
┌──────────┐    SSH Tunnel    ┌──────────┐
│ localhost │ ──────────────► │ DB2      │
│ :50000   │    encrypted     │ :50000   │
└──────────┘                  └──────────┘
```

All traffic on the local port is securely forwarded to the remote port through the encrypted SSH connection.

---

## Configuration

`itun` uses the remote server settings from `~/.nova/cfg/iman.toml`:

```toml
[[iman.remotes]]
name = "PROD"
host = "prod-server.example.com"
port = 22
user = "admin"
key_path = "~/.ssh/id_rsa"
```

The `name` field corresponds to the `<REGION>` argument.

:::note
`itun` is available on **Windows** only. On Linux, use native SSH tunneling commands or the system's built-in SSH client.
:::
