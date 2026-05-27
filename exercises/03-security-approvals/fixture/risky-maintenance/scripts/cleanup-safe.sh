#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
fixture_dir="$(cd -- "$script_dir/.." && pwd)"
config_file="$fixture_dir/config/cleanup-targets.txt"
execute=false

usage() {
  echo "Usage: bash scripts/cleanup-safe.sh [--execute]"
  echo "Default mode is a dry run. Pass --execute to delete allowed tmp/ targets."
}

case "${1:-}" in
  "")
    ;;
  "--execute")
    execute=true
    ;;
  "-h" | "--help")
    usage
    exit 0
    ;;
  *)
    usage >&2
    exit 2
    ;;
esac

if [[ "$execute" == true ]]; then
  echo "Execute mode: deleting allowed tmp/ targets only."
else
  echo "Dry run: no files will be deleted."
fi

line_number=0
while IFS= read -r target || [[ -n "$target" ]]; do
  line_number=$((line_number + 1))

  if [[ -z "$target" ]]; then
    echo "Rejecting line $line_number: blank target"
    continue
  fi

  if [[ "$target" == "/" || "$target" == /* || "$target" == *".."* ]]; then
    echo "Rejecting $target: unsafe path"
    continue
  fi

  if [[ "$target" != tmp/* ]]; then
    echo "Rejecting $target: target must be under tmp/"
    continue
  fi

  target_path="$fixture_dir/$target"
  if [[ "$execute" == true ]]; then
    echo "Deleting $target"
    rm -rf -- "$target_path"
  else
    echo "Would delete $target"
  fi
done < "$config_file"

echo "Safe cleanup review complete."
