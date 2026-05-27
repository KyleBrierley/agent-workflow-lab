# Exercise 07: Delegation and Worktree Judgment

## Goal

Practice deciding when to split Codex work across subagents or worktrees, how to define safe delegation boundaries, and how to merge findings back into one implementation decision.

## Scenario

You are dropped into a fictional production-readiness review. The fixture has two independent investigation tracks:

- `api-timeouts.md` describes a reliability issue with long-running imports.
- `config-safety.md` describes a configuration and permissions concern.

Both tracks matter, but they do not require the same context. This is a good moment to practice using Codex as an orchestrator instead of keeping every investigation in one crowded thread.

## Your Task

Ask Codex to inspect the fixture, propose which parts could be delegated to a subagent or separate worktree, and write a short delegation plan before making any edits.

Then have Codex produce one consolidated `fixture/READINESS_REVIEW.md` that merges the evidence, names the recommended next actions, and identifies which findings are safe to fix immediately versus which need human approval.

## Constraints

- Start with a plan before editing.
- Treat the two investigation tracks as separable unless Codex finds evidence they overlap.
- Keep edits scoped to `exercises/07-delegation-worktrees/fixture`.
- Do not invent implementation details that are not supported by the fixture.
- Do not claim a subagent or worktree was actually used unless it was.
- Prefer evidence-backed recommendations over broad rewrites.

## Done When

- Codex explains what should stay in the main thread and what could be delegated.
- Codex identifies the handoff prompt it would give a subagent or worktree.
- `fixture/READINESS_REVIEW.md` exists.
- The review cites evidence from both fixture documents.
- The final answer names whether delegation was simulated or actually used, what changed, and what validation was possible.

## Suggested Debrief

- Did delegation reduce context noise?
- Were the delegated tasks independent enough?
- Did Codex merge evidence before recommending action?
- Did it avoid making unsupported fixes?
- What would you ask a subagent to return differently next time?
