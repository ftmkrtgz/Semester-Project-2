import { login } from "../api/auth/login.mjs";
import { displayMessage } from "../setting/message.mjs";
import { load } from "../storage/load.mjs";

export function submitLoginForm() {
  const form = document.querySelector("#loginForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const { email, password } = Object.fromEntries(formData.entries());
      try {
        await login(email, password);
        setTimeout(() => {
          const { name } = load("user");
          location.href = `/profile/?name=${name}`;
        }, 500);
      } catch (error) {
        displayMessage("loginFeedback", error.message, "error");
      }
    });
  }
}
