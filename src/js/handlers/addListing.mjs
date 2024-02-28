import { addListing } from "../api/listings/addListing.mjs";
import { displayMessage } from "../setting/message.mjs";

export function submitAddListingForm() {
  const form = document.querySelector("#addListingFormOption");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries());
      try {
        await addListing(listing);
        displayMessage("createListingFeedback", "succes");
      } catch (error) {
        displayMessage("createListingFeedback", error, "error");
      }
    });
  }
}
