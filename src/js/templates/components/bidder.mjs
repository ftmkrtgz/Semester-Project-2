function bidderTemplate(bids) {
  const card = document.createElement("div");
  card.classList.add("row", "my-3", "align-items-center");

  const name = document.createElement("p");
  name.classList.add("col-4", "ps-3");
  name.innerText = bids.bidderName;

  const date = document.createElement("p");
  date.classList.add("col-4");
  date.innerText = bids.created.slice(0, -14);

  const amount = document.createElement("p");
  amount.classList.add("col-2");
  amount.innerHTML = `${bids.amount} $`;

  card.append(name, date, amount);
  return card;
}

export function renderBiddingHistoryTemplate(bids, parent) {
  parent.innerHTML = "";
  parent.append(...bids.map(bidderTemplate));
}
