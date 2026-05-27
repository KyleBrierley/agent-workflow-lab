# Exercise 06: Diff Review and Commit Hygiene

## Goal

Practice finishing a Codex task cleanly: inspect the final diff, separate intended changes from incidental work, run validation, and prepare a commit-ready summary.

## Scenario

The `fixture/changelog-helper` package formats release notes for a small team. A teammate reports that internal notes marked `[internal]` are showing up in public release notes.

The fix is probably small, but the real skill is the last mile: do not let Codex finish with a vague summary, stray scratch files, or an unreviewed diff.

## Your Task

Ask Codex to inspect the fixture, explain the current formatting flow, fix the smallest appropriate surface area so internal notes are excluded from public output, and add or update a regression test.

Before accepting the result, ask Codex to review `git status` and `git diff`, identify exactly which files belong in the exercise, and give a commit-ready summary.

## Constraints

- Codex must inspect source and tests before editing.
- Keep changes scoped to `fixture/changelog-helper`.
- Do not stage or commit until after the final diff review.
- Do not use broad staging commands if the worktree contains unrelated changes.
- Preserve existing public release note formatting.

## Done When

- Codex can explain how release note text is produced.
- `npm test` passes from `fixture/changelog-helper`.
- A regression assertion proves `[internal]` notes are excluded.
- Codex reviews final `git status` and `git diff` before declaring the task done.
- The final answer names the intended files changed and gives a concise commit message.

## Suggested Debrief

- Did Codex inspect before editing?
- Did the diff review catch only the intended files?
- Was validation run before the commit summary?
- Did Codex avoid staging unrelated work?
- What prompt would make the final review sharper next time?
