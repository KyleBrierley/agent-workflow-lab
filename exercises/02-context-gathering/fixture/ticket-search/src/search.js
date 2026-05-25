import tickets from "../data/tickets.json" with { type: "json" };

function normalize(value) {
  return String(value || "").toLowerCase();
}

function ticketSearchText(ticket) {
  return [
    ticket.id,
    ticket.title,
    ticket.description,
    ...(ticket.tags || [])
  ]
    .map(normalize)
    .join(" ");
}

export function listTickets(query = "") {
  const terms = normalize(query).split(/\s+/).filter(Boolean);

  if (terms.length === 0) {
    return tickets;
  }

  return tickets.filter((ticket) => {
    const searchText = ticketSearchText(ticket);
    return terms.every((term) => searchText.includes(term));
  });
}

