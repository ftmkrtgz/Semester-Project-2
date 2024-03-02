import { getProfile } from "../api/profile/getProfile.mjs";
import { load } from "../storage/load.mjs";
import { renderSingelCardTemplates } from "../templates/components/card.mjs";
import { renderErrorMessage } from "../templates/components/error.mjs";
import { renderWinsListingsTemplates } from "../templates/components/winns.mjs";

export async function renderProfilePage() {
  const { name } = load("user");
  const user = await getProfile(name);

  const profileImageContainer = document.querySelector(
    "#profileImageContainer",
  );
  const modalImg = document.querySelector("#avatar-preview");
  const nameContainer = document.querySelector("#nameContainer");
  const emailContainer = document.querySelector("#emailContainer");
  const creditContainer = document.querySelector("#creditContainer");
  const listingsContainer = document.querySelector("#listingsContainer");
  const winsContainer = document.querySelector("#winsContainer");

  nameContainer.innerText += `  ${user.name}`;
  emailContainer.innerText += ` ${user.email}`;
  creditContainer.innerHTML += `${user.credits} $`;

  if (user.avatar) {
    modalImg.src = user.avatar;
    profileImageContainer.src = user.avatar;
  } else {
    modalImg.src = "/images/default-avatar.png";
    profileImageContainer.src = "/images/default-avatar.png";
  }
  renderSingelCardTemplates(user.listings, listingsContainer);

  if (Array.isArray(user.listings) && user.listings.length === 0) {
    renderErrorMessage("You don't have any listings yet", listingsContainer);
  } else {
    renderSingelCardTemplates(user.listings, listingsContainer);
  }

  if (Array.isArray(user.wins) && user.wins.length === 0) {
    renderErrorMessage("You don't have any wins yet", winsContainer);
  } else {
    renderWinsListingsTemplates(user.wins);
  }
}
