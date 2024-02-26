import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
  try {
    const loginURL = API_SOCIAL_URL + action;

    const body = JSON.stringify(profile);

    const response = await fetch(loginURL, {
      headers: {
        "Content-type": "application/json",
      },
      method,
      body,
    });

    const { accessToken, ...user } = await response.json();

    storage.save("token", accessToken);

    storage.save("profile", user);

    if (response.ok) {
      alert("You are now logged in");
      window.location.replace("/profile/login/home.html");
    } else {
      alert("Write your email and password again");
    }
  } catch (error) {
    throw error;
  }
}
