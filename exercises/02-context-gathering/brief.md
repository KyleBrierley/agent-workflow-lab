# Exercise 02: Context Gathering Before Edits

## Goal

Practice making Codex orient itself in a small repo before it changes code.

## Scenario

The ticket search fixture has a failing behavior: searching for `refund SLA` should return ticket `LAB-102`, but it does not. The bug might be in code, data, or tests.

The purpose of this exercise is to practice context gathering first. Do not start by asking Codex to "just fix it." Ask it to inspect the relevant files, explain the current search flow, and propose a plan before editing.

## Your Task

Ask Codex to investigate why `refund SLA` does not match `LAB-102`, then fix the smallest appropriate surface area and add or update a regression test.

## Constraints

- Codex must inspect the fixture before editing.
- Prefer changing domain logic over changing test expectations unless the data proves otherwise.
- Keep the solution scoped to `fixture/ticket-search`.
- Preserve existing passing search behavior.

## Done When

- Codex can explain where the search text comes from.
- `npm test` passes from `fixture/ticket-search`.
- A regression assertion for `refund SLA` returning `LAB-102` exists.
- The final answer names the files changed and the validation command run.

## Suggested Debrief

- Did Codex read tests, source, and data?
- Did the plan mention the exact bug path?
- Was the final change smaller after context gathering?
- What prompt would have made the investigation sharper?

