import assert from "node:assert/strict";
import { listTickets } from "../src/search.js";

assert.deepEqual(
  listTickets("workspace").map((ticket) => ticket.id),
  ["LAB-101"]
);

assert.deepEqual(
  listTickets("refund").map((ticket) => ticket.id),
  ["LAB-102"]
);

assert.deepEqual(
  listTickets("refund SLA").map((ticket) => ticket.id),
  ["LAB-102"]
);

assert.deepEqual(
  listTickets("staging deploy").map((ticket) => ticket.id),
  []
);

console.log("ticket-search tests passed");

