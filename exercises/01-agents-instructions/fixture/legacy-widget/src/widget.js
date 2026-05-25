export function formatStatusLabel(status) {
  const normalized = String(status || "").trim().toLowerCase();

  if (normalized === "blocked") {
    return "Blocked";
  }

  if (normalized === "in_progress") {
    return "In progress";
  }

  if (normalized === "done") {
    return "Done";
  }

  return "Unknown";
}

