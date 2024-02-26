import * as listeners from "./handlers/index.mjs";
import { header } from "./ui/header/header.mjs";

header();

const path = location.pathname;

if (path === "/profile/login/index.html") {
  listeners.setLoginFormListener();
} else if (path === "/profile/register/index.html") {
  listeners.setRegisterFormListener();
} else if (
  path === "/" ||
  "/profile" ||
  "/products" ||
  "/products/single-product.html"
) {
  listeners.logoutListener();
}
