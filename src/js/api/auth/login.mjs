import { BASE_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";
import { headers } from "../headers.mjs";

export async function login(email, password) {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const { accessToken, ...user } = await response.json();
      storage.save("token", accessToken);
      storage.save("user", user);
    } else {
      throw new Error("Incorrect username or password.");
    }
  } catch (error) {
    throw error;
  }
}
