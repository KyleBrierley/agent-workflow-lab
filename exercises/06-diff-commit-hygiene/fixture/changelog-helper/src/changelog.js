function formatReleaseNotes(notes) {
  return notes
    .filter((note) => note.status !== "draft")
    .map((note) => `- ${note.title}`)
    .join("\n");
}

module.exports = {
  formatReleaseNotes,
};
