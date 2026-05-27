# Codex Skill Map

Use this map to choose the right exercise for the skill you want to practice.

## Instruction Control

Practice making Codex useful before the task starts.

- Root `AGENTS.md` instructions.
- Nested exercise-specific instructions.
- Validation commands.
- Style and safety constraints.
- Clear "done when" criteria.

Start with: `exercises/01-agents-instructions`

## Context Gathering

Practice slowing Codex down before edits.

- Identify the real entry points.
- Inspect tests and fixtures.
- Summarize data flow.
- Explain assumptions.
- Propose a plan tied to files.

Start with: `exercises/02-context-gathering`

## Safety and Approvals

Practice recognizing when a command or diff needs more care.

- Risky shell commands.
- Secret handling.
- Destructive scripts.
- Suspicious config changes.
- Safer alternatives.

Start with: `exercises/03-security-approvals`

## Configuration

Practice reasoning about Codex execution settings.

- Sandbox modes.
- Approval modes.
- Profiles.
- Isolated `CODEX_HOME`.
- Project-local guidance versus global preferences.

Start with: `exercises/04-config-profiles`

## Session Steering

Practice operating the conversation.

- `/plan`
- `/status`
- `/diff`
- `/compact`
- `/agent`
- Redirecting Codex when the task changes.

Start with: `exercises/05-slash-command-flow`

## Diff and Commit Hygiene

Practice finishing work with evidence instead of vibes.

- Review `git status` before staging.
- Inspect `git diff` before accepting the result.
- Separate intended exercise changes from incidental scratch work.
- Run the fixture-specific validation command.
- Produce a commit-ready summary with exact files changed.

Start with: `exercises/06-diff-commit-hygiene`

## Delegation and Worktrees

Practice deciding when Codex should split work across contexts.

- Identify independent investigation tracks.
- Decide what stays in the main thread.
- Write a clear subagent or worktree handoff prompt.
- Merge evidence before implementation.
- Avoid claiming delegated work happened when it was only simulated.

Start with: `exercises/07-delegation-worktrees`
