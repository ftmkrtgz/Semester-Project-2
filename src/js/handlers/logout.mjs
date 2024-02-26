import { logout } from "../api/auth/logout.mjs";

export function logoutListener() {
  const btnLogout = document.querySelectorAll(".btn-logout");
  btnLogout.forEach((btn) =>
    btn.addEventListener("click", () => {
      logout();
      setTimeout(() => {
        location.assign("/");
      }, 500);
    })
  );
}
