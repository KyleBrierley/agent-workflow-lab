#!/usr/bin/env bash
set -euo pipefail

while read -r target; do
  if [[ -n "$target" ]]; then
    echo "Deleting $target"
    rm -rf "$target"
  fi
done < config/cleanup-targets.txt

echo "Cleanup complete"

