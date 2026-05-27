# Codex Practice Lab

This repo is a small operations gym for practicing Codex itself. The goal is not to build one large app. The goal is to rehearse the workflows that make Codex useful in a real engineering interview or work session: orienting in a repo, writing good instructions, planning before edits, handling risky commands, checking diffs, and validating results.

This lab is intentionally separate from `support-ticket-practice`. Use this repo
for practicing Codex behavior: instruction writing, context gathering, safety
judgment, config reasoning, and session steering. Use the app repo for realistic
feature and bug-fix drills.

## How to Practice

For each exercise:

1. Open the exercise `brief.md`.
2. Start a new Codex thread from this repo.
3. Give Codex the task from the brief.
4. Make Codex inspect the fixture before editing.
5. Ask for a short plan when the task is ambiguous.
6. Let Codex implement only after the plan is clear.
7. Review the diff, run the listed checks, and write a short debrief.

## Exercises

| Exercise | Skill | Status |
| --- | --- | --- |
| `01-agents-instructions` | Root and nested `AGENTS.md` guidance | Ready |
| `02-context-gathering` | Repo orientation before edits | Ready |
| `03-security-approvals` | Risk review, secrets, and command safety | Ready |
| `04-config-profiles` | User config, project config, profiles, and safety boundaries | Ready |
| `05-slash-command-flow` | Session steering with slash commands | Ready |

See `docs/codex-skill-map.md` when choosing which skill to practice next.

## Validation

This repo has no global build. Validate individual fixtures from inside their
directories when they include a `package.json`:

```sh
npm test
```

Current JavaScript fixtures:

- `exercises/01-agents-instructions/fixture/legacy-widget`
- `exercises/02-context-gathering/fixture/ticket-search`

Some exercises are review-only or documentation-oriented and do not have a test
harness. For those, validate by checking the brief's "Done When" section, reading
the final diff, and confirming any changed TOML or Markdown still parses or
renders sensibly.

For repo structure checks:

```sh
rg --files
git status --short
```
