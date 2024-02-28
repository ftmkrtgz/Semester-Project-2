function singleCardTemplate(listing) {
  const card = document.createElement("div");
  card.classList.add("col", "delete");

  const card2 = document.createElement("div");
  card2.classList.add("card", "border-secondary", "text-center", "mt-4");

  const img = document.createElement("img");
  img.src = listing.media ?? `/images/default-avatar.png`;
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

  const cardFooter = document.createElement("div");
  cardFooter.classList.add(
    "card-footer",
    "d-flex",
    "bg-success-subtle",
    "justify-content-between"
  );

  const btnEdit = document.createElement("button");
  btnEdit.classList.add("btn", "mx-auto", "fw-semibold", "fs-4");
  btnEdit.innerHTML = "EDIT <i class='fa-solid fa-pen-to-square'></i>";

  btnEdit.addEventListener("click", function () {
    window.location.href = `/products/single-product/?id=${listing.id}`;
  });

  card.append(card2);
  card2.append(img, cardBody);
  cardBody.append(cardTitle, cardContent, line, cardFooter);
  cardContent.append(EndsIn, cardDate);

  cardFooter.append(btnEdit);

  return card;
}

export function renderSingelCardTemplate(listing, parent) {
  parent.innerHTML = "";
  parent.append(singleCardTemplate(listing));
}

export function renderSingelCardTemplates(listingList, parent) {
  parent.innerHTML = "";
  parent.append(...listingList.map(singleCardTemplate));
}
