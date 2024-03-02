function sellerTemplate(seller) {
  const card = document.createElement("div");
  card.classList.add("row", "my-3", "align-items-center");

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("col-3");

  const avatarImg = document.createElement("img");
  avatarImg.src = seller.avatar ?? `/images/default-avatar.png`;

  avatarImg.classList.add(
    "avatar-img",
    "img-fluid",
    "rounded-circle",
    "seller",
  );
  avatarImg.alt = "Seller avatar";

  avatarImg.style.width = "60%";

  imgDiv.append(avatarImg);

  const bodyCol = document.createElement("div");
  bodyCol.classList.add("m-2", "col-3");

  const cardTitle = document.createElement("p");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = seller.name;
  bodyCol.append(cardTitle);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "col-3");

  const emailText = document.createElement("p");
  emailText.classList.add("card-text", "pe-5");
  emailText.textContent = seller.email;
  cardBody.append(emailText);
  card.append(imgDiv, bodyCol, cardBody);
  return card;
}

export function renderSellerTemplate(seller, parent) {
  parent.innerHTML = "";
  parent.append(sellerTemplate(seller));
}
