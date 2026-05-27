# Config Safety Notes

## Observed Behavior

The sample deployment notes recommend running Codex with broad filesystem access during incident reviews so it can "find everything quickly."

## Current Clues

- The incident-review profile allows writes outside the project checkout.
- The project `AGENTS.md` says incident reviews should start read-only unless the operator approves a specific fix.
- Secrets are stored in the team's real environment manager, not in the repo.
- The notes do not explain when to switch from investigation to implementation.

## Open Questions

- Which profile should be used for initial triage?
- What approval boundary should apply before modifying files outside the repo?
- What should the operator ask Codex to summarize before granting broader access?
