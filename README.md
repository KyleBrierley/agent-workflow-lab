# Codex Practice Lab

This repo is a small operations gym for practicing Codex itself. The goal is not to build one large app. The goal is to rehearse the workflows that make Codex useful in a real engineering interview or work session: orienting in a repo, writing good instructions, planning before edits, handling risky commands, checking diffs, and validating results.

Use `support-ticket-practice` for realistic app and ticket work. Use this lab when the skill being practiced is how to operate Codex.

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
| `04-config-profiles` | Sandbox, approval, and profile reasoning | Planned |
| `05-slash-command-flow` | Session steering with slash commands | Planned |
| `06-git-workflow` | Branch, commit, diff, and PR hygiene | Planned |
| `07-worktrees-subagents` | Splitting independent work | Planned |

## Validation

This repo has no global build yet. Validate individual fixtures from inside their directories:

```sh
npm test
```

For repo structure checks:

```sh
find . -maxdepth 4 -type f | sort
git status --short
```

