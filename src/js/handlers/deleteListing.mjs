import { deleteListing } from "../api/listings/deleteListing.mjs";

export async function deleteList(id) {
  document.querySelector("#deleteBtn").addEventListener("click", () => {
    deleteListing(id);
  });
}
