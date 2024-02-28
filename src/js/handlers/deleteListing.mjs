import { deleteListing } from "../api/listings/deleteListing.mjs";

export async function deleteList(id) {
  document
    .querySelector(".delete-listing-btn")
    .addEventListener("click", () => {
      deleteListing(id);
    });
}
