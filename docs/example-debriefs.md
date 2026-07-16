# Example Exercise Debriefs

These are concise, illustrative outputs for two lab exercises. They show the
level of evidence expected from a run; they are not transcripts, benchmarks, or
claims about an autonomous production agent.

## Example 1: Repository Instructions

**Exercise:** `01-agents-instructions`

**Expected output**

- A fixture-level `AGENTS.md` that names the source and test locations.
- The correct `npm test` validation command.
- A scope rule that keeps future edits inside the fixture.
- No changes to the widget source or tests.

**Debrief**

- **What changed:** Added durable, fixture-specific guidance for future agent
  runs without modifying application behavior.
- **Validation:** Ran `npm test` from the fixture and reviewed the final diff to
  confirm only `AGENTS.md` changed.
- **Behavior exercised:** Inspecting a repository before writing instructions
  and turning observed conventions into narrow operating guidance.
- **Next improvement:** Ask the agent to explain which instructions belong at
  the root versus the fixture level before drafting.

## Example 2: Diff and Commit Hygiene

**Exercise:** `06-diff-commit-hygiene`

**Expected output**

- A minimal formatter change that excludes notes marked `[internal]`.
- A regression assertion covering the public-output boundary.
- Passing fixture tests.
- A final status and diff review that identifies only intended files.

**Debrief**

- **What changed:** Filtered internal notes before public release-note
  formatting and added a regression test.
- **Validation:** Ran `npm test`, inspected `git status`, and reviewed the diff
  before proposing a commit.
- **Behavior exercised:** Treating implementation, validation, and staging
  discipline as one workflow rather than stopping when the code first works.
- **Next improvement:** Include one mixed public/internal input case to make
  preservation of existing formatting more explicit.
