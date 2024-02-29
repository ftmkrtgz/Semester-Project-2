function singleCardTemplate(listing) {
  const cardLink = document.createElement("a");
  cardLink.classList.add("text-decoration-none");
  cardLink.href = `/products/single-product/?id=${listing.id}`;

  const card = document.createElement("div");
  card.classList.add("col");

  const card2 = document.createElement("div");
  card2.classList.add("card", "border-secondary", "text-center", "mt-4");

  const img = document.createElement("img");
  img.src = listing.media[0] ?? `/images/placeholder.png`;
  img.classList.add("card-img-top", "mx-auto", "pt-3");
  img.style.height = "15rem";
  img.style.width = "80%";
  img.alt = listing.title;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title", "text-center");
  cardTitle.textContent = listing.title;

  const line = document.createElement("hr");

  const cardContent = document.createElement("div");
  cardContent.classList.add("row");

  const cardCol = document.createElement("div");
  cardCol.classList.add("col");

  const bids = document.createElement("h6");
  bids.classList.add("text-success", "fw-bold");
  bids.innerText = "Current Bid:";

  const bidsAmount = document.createElement("p");
  const amounts = listing.bids.map((bid) => bid.amount);
  const maxAmount = Math.max(...amounts);
  if (maxAmount > 0) {
    bidsAmount.innerHTML += `${maxAmount} $`;
  } else {
    bidsAmount.innerHTML += ` 0 $`;
  }

  const cardCol2 = document.createElement("div");
  cardCol2.classList.add("col");

  const EndsIn = document.createElement("h6");
  EndsIn.classList.add("text-success", "fw-bold");
  EndsIn.innerText = "Ends In:";

  const cardDate = document.createElement("p");
  const endDate = new Date(listing.endsAt);
  const today = new Date();
  const timeDiff = endDate.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

  if (daysLeft >= 0) {
    cardDate.textContent = `${daysLeft} days left`;
  } else {
    cardDate.textContent = "Expired";
  }

  const cardButton = document.createElement("button");
  if (daysLeft <= 0) {
    cardButton.classList.add("btn", "bg-warning", "fw-semibold");
    cardButton.innerText = "SOLD";
  } else {
    cardButton.classList.add("btn", "btn-success");
    cardButton.innerText = "Submit A Bid";
  }

  card.append(cardLink);
  cardLink.append(card2);
  card2.append(img, cardBody);
  cardBody.append(cardTitle, line, cardContent);
  cardContent.append(cardCol, cardCol2, cardButton);
  cardCol.append(bids, bidsAmount);
  cardCol2.append(EndsIn, cardDate);
  return card;
}

export function renderSingelListingCardTemplate(listing, parent) {
  parent.innerHTML = "";
  parent.append(singleCardTemplate(listing));
}

export function renderListingsCardTemplates(listingList, parent) {
  parent.innerHTML = "";
  parent.append(...listingList.map(singleCardTemplate));
}
