function formatReleaseNotes(notes) {
  return notes
    .filter((note) => note.status !== "draft" && !note.title.startsWith("[internal]"))
    .map((note) => `- ${note.title}`)
    .join("\n");
}

module.exports = {
  formatReleaseNotes,
};
