import assert from "node:assert/strict";
import { formatStatusLabel } from "../src/widget.js";

assert.equal(formatStatusLabel("blocked"), "Blocked");
assert.equal(formatStatusLabel(" IN_PROGRESS "), "In progress");
assert.equal(formatStatusLabel("done"), "Done");
assert.equal(formatStatusLabel("later"), "Unknown");

console.log("legacy-widget tests passed");

