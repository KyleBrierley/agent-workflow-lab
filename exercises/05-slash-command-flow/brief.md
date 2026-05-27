# Exercise 05: Slash Command Flow

## Goal

Practice steering an active Codex session with slash commands and mid-task redirects.

## Scenario

You are working with Codex on a small repo change, but the session starts to drift: the plan is vague, you are not sure what files changed, and the context window is getting noisy.

This exercise is not about solving a code bug. It is about practicing how to keep a Codex session observable, interruptible, and pointed at the right outcome.

## Your Task

Ask Codex to walk through a simulated repo task using session steering commands such as `/plan`, `/status`, `/diff`, and `/compact`. During the task, redirect Codex at least once with a plain-language correction, such as narrowing scope, asking it to pause before editing, asking whether a subagent would help, or asking it to summarize what changed so far.

## Constraints

- Do not ask Codex to make broad repo changes for this exercise.
- Keep any edits, if used, limited to a tiny scratch file inside this exercise directory.
- Use `/plan` before implementation work.
- Use `/status` or an equivalent status check before deciding whether to continue.
- Use `/diff` or an equivalent diff review before accepting the result.
- Use `/compact` only after Codex has summarized the important current context.
- Use `/agent` or subagent delegation only if there is a clearly separate side task.

## Done When

- Codex produced a concrete plan before any implementation work.
- You redirected Codex at least once after the initial plan.
- Codex reported current status before continuing.
- Codex reviewed the final diff or explicitly stated that no files changed.
- The final answer names what changed, what did not change, and which steering moves were practiced.

## Suggested Debrief

- Did `/plan` make the task easier to supervise?
- Did `/status` reveal anything surprising?
- Did `/diff` catch scope creep before the task ended?
- Was the redirect specific enough for Codex to follow?
- What context would need to survive a `/compact` before continuing later?
