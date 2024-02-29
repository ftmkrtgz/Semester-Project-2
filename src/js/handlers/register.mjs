import { register } from "../api/auth/register.mjs";
import { displayMessage } from "../setting/message.mjs";

export function submitRegisterForm() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const { name, email, password, avatar } = Object.fromEntries(
        formData.entries(),
      );
      try {
        await register(name, email, password, avatar);
        setTimeout(() => {
          location.assign("/profile/login");
        }, 300);
      } catch (error) {
        displayMessage("registerFeedback", error.message, "error");
      }
    });
  }
}
