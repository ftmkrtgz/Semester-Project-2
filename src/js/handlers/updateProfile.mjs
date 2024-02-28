import { updateProfile } from "../api/profile/update.mjs";
import { load } from "../storage/load.mjs";
import { displayMessage } from "../setting/message.mjs";

export function submitUpdateProfileAvatarForm() {
  const form = document.querySelector("#updateProfileAvatarForm");

  if (form) {
    let { name } = load("user");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const user = Object.fromEntries(formData.entries());
      user.name = name;
      try {
        await updateProfile(user);
        setTimeout(() => {
          location.reload();
        }, 300);
      } catch (error) {
        displayMessage("updateProfileAvatarFeedback", error, "error");
      }
    });
  }
}
