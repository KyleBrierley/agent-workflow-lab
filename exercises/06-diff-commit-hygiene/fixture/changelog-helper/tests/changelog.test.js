const assert = require("assert");
const { formatReleaseNotes } = require("../src/changelog");

const notes = [
  { title: "Add saved search filters", status: "public" },
  { title: "[internal] Rotate analytics token", status: "public" },
  { title: "Draft billing export", status: "draft" },
  { title: "Improve import progress messages", status: "public" },
];

const output = formatReleaseNotes(notes);

assert.match(output, /Add saved search filters/);
assert.match(output, /Improve import progress messages/);
assert.doesNotMatch(output, /Draft billing export/);
assert.doesNotMatch(output, /\[internal\] Rotate analytics token/);

console.log("changelog tests passed");
