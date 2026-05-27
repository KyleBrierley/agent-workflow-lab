# API Timeout Notes

## Observed Behavior

Large CSV imports sometimes exceed the request timeout when the import includes more than 5,000 rows. Operators retry the request manually, which can create duplicate import jobs.

## Current Clues

- The import endpoint accepts the CSV upload and starts parsing rows inside the request handler.
- The job table has a unique `source_file_id`, but retries can use a new upload ID for the same original file.
- Operators need a visible job ID before leaving the page.
- There is no background worker documented in this fixture.

## Open Questions

- Should uploads create a pending job before row parsing begins?
- Where should duplicate detection happen if the same original file is retried?
- What status should the UI show while parsing continues?
