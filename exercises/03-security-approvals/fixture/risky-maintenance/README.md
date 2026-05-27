# Risky Maintenance Fixture

This fixture is intentionally unsafe. Use it to practice command review and secret handling.

`scripts/cleanup.sh` is the original risky review target. Do not run it until you
have inspected the script and `config/cleanup-targets.txt`.

`scripts/cleanup-safe.sh` is a guarded alternative for after the review. It runs
as a dry run by default:

```sh
bash scripts/cleanup-safe.sh
```

It only deletes allowed `tmp/` targets when explicitly run with `--execute`, and
it rejects absolute paths, path traversal, blank targets, and targets outside
`tmp/`.

Do not print or commit real secret values from env files. If you mention env
settings in notes or commits, redact the values.
