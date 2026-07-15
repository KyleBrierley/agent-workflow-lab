# Exercise 08 Draft: Timed Change Run

## Status

Draft idea only. Do not treat this as a ready exercise until it has a fixture and final done-when criteria.

## Goal

Practice a realistic 25-minute change workflow where the operator narrates how they would understand, modify, validate, and safely prepare a change with Codex.

## Workflow Skill

This drill is less about one code fix and more about showing judgment under time pressure:

- Orient quickly without pretending to know the repo.
- Ask Codex for a plan before edits.
- Keep the change small and tied to the stated request.
- Explain safety boundaries before risky commands or broad access.
- Validate the behavior and review the diff before calling the task complete.
- Summarize the result in concise, handoff-ready language.

## Scenario Sketch

A teammate reports that a customer-facing support tool is returning confusing results for one query. You have a small fixture, a failing expectation, and 25 minutes to work with Codex.

The exercise evaluates the reasoning as much as the final fix. The operator should narrate:

- What you ask Codex to inspect first.
- What assumptions you are making.
- Which files or tests prove the current behavior.
- Why the planned edit is the smallest reasonable one.
- How you know the change worked.
- What you would do next if this were a real production change.

## Candidate Prompt

```text
We are doing a timed change drill. Inspect the exercise brief and fixture first, then give me a short plan before editing. As you work, keep the scope tight, explain what evidence you found, run the fixture validation, and review the final diff before summarizing the result.
```

## Draft Flow

1. Five minutes: read the brief, inspect files, and explain the current behavior.
2. Five minutes: propose a plan and confirm the smallest edit surface.
3. Ten minutes: implement the fix and add or update a regression test.
4. Three minutes: run validation and review the diff.
5. Two minutes: give a crisp engineering handoff.

## Possible Fixture Ideas

- Search query edge case in a tiny ticket tool.
- Permission-gated action that lacks a regression test.
- Config mismatch where the right answer is documentation plus a safer default.
- API response formatter that leaks an internal-only field.

## Done-When Ideas

- Codex inspected source, tests, and fixture data before editing.
- The operator asked for and approved a short plan.
- Validation passed from the fixture directory.
- The final diff was reviewed before the summary.
- The final answer included what changed, what validation ran, what risk remains, and how the operator would hand the work to another engineer.

## Open Design Questions

- Should this reuse a support-ticket-style fixture or stay fully inside `agent-workflow-lab`?
- Should the time limit be strict, or should the debrief reward pausing when scope is unclear?
- Should the run include an intentional distraction, such as an unrelated dirty file, to combine Exercise 06 skills with the handoff narration?
