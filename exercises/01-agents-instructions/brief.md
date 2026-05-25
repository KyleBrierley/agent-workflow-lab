# Exercise 01: AGENTS.md Instructions

## Goal

Practice creating useful Codex repo guidance from a small code fixture.

## Scenario

You inherited a tiny JavaScript package in `fixture/legacy-widget`. It has a test script, a simple source file, and no project instructions. Your job is not to change the widget. Your job is to teach Codex how to work in that fixture by adding a local `AGENTS.md`.

## Your Task

Ask Codex to inspect `fixture/legacy-widget`, then create `fixture/legacy-widget/AGENTS.md` with practical guidance for future agents working in that fixture.

## Constraints

- Do not edit source or test code.
- Do not invent a build system.
- Keep the instructions short enough that a future agent will actually read them.
- Include the validation command future agents should run.
- Include at least one safety or scope rule.

## Done When

- `fixture/legacy-widget/AGENTS.md` exists.
- It mentions the correct test command.
- It names the source and test locations.
- It tells future agents to keep changes scoped.
- `npm test` passes from `fixture/legacy-widget`.

## Suggested Debrief

- Did Codex inspect the fixture before writing instructions?
- Were the instructions concrete or generic?
- Did the local `AGENTS.md` avoid repeating the whole root `AGENTS.md`?
- Would a future agent know how to validate a change?

