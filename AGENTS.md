# Codex Practice Lab Instructions

## Purpose

This repository is for practicing Codex operations. Optimize for clear reasoning, safe edits, and explicit validation. Do not turn exercises into large app builds unless the exercise brief asks for it.

## Working Style

- Start by reading the relevant `brief.md` and nearby fixture files.
- Prefer a short plan before editing when the exercise is ambiguous.
- Keep edits scoped to the exercise directory unless the brief asks for repo-wide changes.
- Preserve the learning goal of each exercise. Do not silently solve a different problem because it is easier.
- Use `rg` or `rg --files` for search.
- Use `apply_patch` for manual file edits.
- Use ASCII unless a file already uses non-ASCII or the exercise explicitly requires it.

## Validation

- Run fixture-specific checks from the fixture directory when a `package.json` exists.
- Use `npm test` for the JavaScript fixtures.
- If you cannot run a check, say exactly why and name the remaining risk.

## Safety

- Treat files named `.env`, `secrets`, `credentials`, `tokens`, or similar as sensitive even when they contain fake values.
- Do not print full secrets in final answers.
- Do not run destructive commands such as `rm -rf`, `git reset --hard`, or broad file deletion unless the user explicitly asks for that operation.
- For security exercises, prefer review, explanation, and safer alternatives over executing risky scripts.

## Debriefs

When finishing an exercise, include:

- What changed.
- What validation ran.
- What Codex behavior was practiced.
- One thing to improve in the next attempt.

