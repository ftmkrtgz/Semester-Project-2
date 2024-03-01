import { addBid } from "../api/listings/bidListing.mjs";
import { load } from "../storage/load.mjs";
import { displayMessage } from "../setting/message.mjs";

export function submitAddBidForm() {
  const form = document.querySelector("#bidAddFormOption");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const inputValue = document.querySelector("input[name=bid]").value;
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const id = urlParams.get("id");
      const isLogedIn = load("user");

      try {
        if (isLogedIn) {
          await addBid(+inputValue, id);
          displayMessage(
            "addBidFormFeedback",
            "Congratulations, You made the highest bid.",
            "success"
          );
          setTimeout(() => {
            location.reload();
          }, 1000);
        } else {
          displayMessage(
            "addBidFormFeedback",
            "Ooops! Looks like you forgot to log in.",
            "error"
          );
        }
      } catch (error) {
        displayMessage("addBidFormFeedback", error, "error");
      }
    });
  }
}
