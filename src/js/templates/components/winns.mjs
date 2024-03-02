import { getListing } from "../../api/listings/getListing.mjs";

function winsTemplate(wins) {
  const card = document.createElement("div");
  card.classList.add("col");

  const card2 = document.createElement("div");
  card2.classList.add("card", "border-secondary", "text-center", "mt-4");

  const img = document.createElement("img");
  img.src = wins.media[0] ?? "/images/placeholder.png";
  img.classList.add("card-img-top", "mx-auto", "pt-3");
  img.style.height = "15rem";
  img.style.width = "80%";
  img.alt = wins.title;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title", "text-center");
  cardTitle.textContent = wins.title;

  card.append(card2);
  card2.append(img, cardBody);
  cardBody.append(cardTitle);

  return card;
}

export function renderWinsTemplate(wins, parent) {
  parent.innerHTML = "";
  parent.append(winsTemplate(wins));
}
export function renderWinsTemplates(winsList, parent) {
  parent.innerHTML = "";
  parent.append(...winsList.map(winsTemplate));
}

export async function renderWinsListingsTemplates(userWins) {
  const winsList = [];

  for (const id of userWins) {
    const listing = await getListing(id);
    winsList.push(listing);
  }

  renderWinsTemplates(winsList, winsContainer);
}
