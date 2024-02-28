import { load } from "../../storage/load.mjs";

export function header() {
  const isLoggedIn = load("user");

  const visibleElements = document.querySelectorAll("[data-visible]");

  for (const element of visibleElements) {
    const visibility = element.dataset.visible;

    if ((visibility === "loggedIn" && isLoggedIn) || (visibility === "loggedOut" && !isLoggedIn)) {
      element.style.display = "inline-block";
    } else {
      element.style.display = "none";
    }
  }
}
