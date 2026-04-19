---
sidebar_position: 7
---

# nexus — Utility CLI

`nexus` provides essential utility commands for encryption, decryption, hashing, and PATH management. It is the go-to tool for managing credentials used across the Nexus toolchain.

---

## Commands

### Encrypt Text

```bash
nexus encrypt <TEXT> [--type <TYPE>]
```

Encrypts a text string using AES-256-GCM encryption. This is primarily used to encrypt database passwords for safe storage in configuration files.

| Option | Description | Default |
|--------|-------------|---------|
| `--type` | Key type: `B` (internal), `U` (user), `H` (host), `S` (system) | `B` |

**Example:**
```bash
# Encrypt a database password
nexus encrypt "MySecretPassword"

# Encrypt with a specific key type
nexus encrypt "MySecretPassword" --type H
```

The output is a base64-encoded encrypted string with a type prefix. Copy this value into your configuration files (e.g., `iman.toml`, VS Code settings).

### Decrypt Text

```bash
nexus decrypt <ENCRYPTED_TEXT>
```

Decrypts a previously encrypted string. The key type is automatically detected from the prefix.

**Example:**
```bash
nexus decrypt "BaGVsbG8gV29ybGQ="
```

### Hash Text

```bash
nexus hash <TEXT>
```

Generates a SHA-256 hash of the input text.

**Example:**
```bash
nexus hash "some important text"
```

### Deduplicate PATH

```bash
nexus dedup <PATH_STRING>
```

Removes duplicate entries from a PATH-style string.

**Example:**
```bash
nexus dedup "C:\bin;C:\tools;C:\bin;C:\app;C:\tools"
# Output: C:\bin;C:\tools;C:\app
```

---

## Common Use Cases

### Encrypting a Database Password

Every tool that connects to DB2 requires an encrypted password. Here's the typical workflow:

1. Run `nexus encrypt "your_password"` — copy the output
2. Paste the encrypted value into your configuration:

**In `iman.toml`** (for `isman` server):
```toml
[[iman.regions]]
name = "DEV"
dbpass = "Bencrypted_output_here"
```

**In VS Code settings** (for the extension):
```json
{
  "binean.nova.NOVA_DBPASS": "Bencrypted_output_here"
}
```

:::warning
Never store plain-text passwords in configuration files. Always use `nexus encrypt` first.
:::

### Key Types

| Type | Code | Use Case |
|------|------|----------|
| Internal | `B` | Default — for local development |
| User | `U` | Tied to user identity |
| Host | `H` | Tied to specific machine |
| System | `S` | System-wide key |

For most users, the default `B` (internal) type is sufficient.
