# Exercise 04: Config Profiles and Project Boundaries

## Goal

Practice reading Codex configuration files, reasoning about precedence, and keeping real user settings safe.

## Scenario

A teammate wants a faster project setup for Codex. They copied a few settings into a fake home directory and also added project-local config to a sample repo. Some settings are helpful, some are misplaced, and some are too risky for routine use.

The fixture is intentionally isolated under `fixture/`. Treat it as a fake `CODEX_HOME` and a fake project checkout. Do not inspect or edit your real `~/.codex` directory.

Reference docs:

- https://developers.openai.com/codex/config-reference/
- https://developers.openai.com/codex/permissions/

## Your Task

Ask Codex to inspect `fixture/`, explain which settings are user-level versus project-level, identify the risky or misplaced choices, and then make the smallest fake-config or documentation changes that would make the setup safer for routine project work.

## Constraints

- Do not read or edit the real `~/.codex` directory.
- Keep changes scoped to `exercises/04-config-profiles/fixture`.
- Do not add app code, package managers, or a test harness.
- Prefer safer fake config and clearer notes over broad rewrites.
- Preserve the learning goal: Codex should explain config precedence and the boundary between `AGENTS.md` and config files.

## Done When

- Codex has inspected the fake user config, fake profile config, fake project config, and project `AGENTS.md`.
- Codex can explain at least three risks or misplaced settings.
- A short `fixture/CONFIG_REVIEW.md` exists with recommended settings and rationale.
- Any changed `.toml` files still parse as TOML.
- The final answer names the files changed and says that no real Codex config was read or edited.

## Suggested Debrief

- Did Codex avoid touching real user config?
- Did it distinguish project guidance from execution settings?
- Did it catch settings that are too permissive for routine use?
- Did it explain why profiles are useful?
- What prompt would have made the config review sharper?
