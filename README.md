# Agent Workflow Lab

This repository is a hands-on lab for building reliable AI coding-agent workflows. It is a collection of focused exercises and small fixtures rather than one large application. Each exercise isolates an operating pattern that transfers to real engineering work: repository orientation, durable instructions, scoped planning, approval and safety judgment, delegated investigation, diff review, and evidence-backed validation.

The lab is intentionally separate from `support-operations-workbench`. Use this
repository to study and rehearse agent behavior such as instruction writing,
context gathering, safety judgment, configuration reasoning, and session
steering. Use the companion application for realistic feature and bug-fix
scenarios in a full-stack codebase.

## How to Use the Lab

For each exercise:

1. Open the exercise `brief.md`.
2. Start a new Codex thread from this repo.
3. Give your coding agent the task from the brief.
4. Ask the agent to inspect the fixture before editing.
5. Ask for a short plan when the task is ambiguous.
6. Let the agent implement only after the plan is clear.
7. Review the diff, run the listed checks, and write a short debrief.

## Exercises

| Exercise | Skill | Status |
| --- | --- | --- |
| `01-agents-instructions` | Root and nested `AGENTS.md` guidance | Ready |
| `02-context-gathering` | Repo orientation before edits | Ready |
| `03-security-approvals` | Risk review, secrets, and command safety | Ready |
| `04-config-profiles` | User config, project config, profiles, and safety boundaries | Ready |
| `05-slash-command-flow` | Session steering with slash commands | Ready |
| `06-diff-commit-hygiene` | Diff review, staging discipline, and commit-ready summaries | Ready |
| `07-delegation-worktrees` | Subagent/worktree delegation and evidence merging | Ready |

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
- `exercises/06-diff-commit-hygiene/fixture/changelog-helper`

Some exercises are review-only or documentation-oriented and do not have a test
harness. For those, validate by checking the brief's "Done When" section, reading
the final diff, and confirming any changed TOML or Markdown still parses or
renders sensibly.

For repo structure checks:

```sh
rg --files
git status --short
```
