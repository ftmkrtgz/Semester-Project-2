import { header } from "./templates/header/header.mjs";
import * as listeners from "./handlers/index.mjs";
import * as pages from "./pages/index.mjs";

header();

const path = location.pathname;
switch (path) {
  case "/":
    pages.renderHomePage();
    listeners.search();
    listeners.logoutListener();
    break;

  case "/profile/login/":
    listeners.submitLoginForm();
    break;

  case "/profile/register/":
    listeners.submitRegisterForm();
    break;

  case "/profile/":
    pages.renderProfilePage();
    listeners.logoutListener();
    listeners.submitUpdateProfileAvatarForm();
    listeners.submitAddListingForm();
    break;

  case "/products/":
    pages.renderListingsPage();
    listeners.search();
    listeners.logoutListener();
    break;

  case "/products/single-product/":
    pages.renderSingleListingPage();
    listeners.logoutListener();
    listeners.submitAddBidForm();
    break;
}
