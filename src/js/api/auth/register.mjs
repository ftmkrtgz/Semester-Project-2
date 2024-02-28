import { BASE_URL } from "../constants.mjs";
import { headers } from "../headers.mjs";

export async function register(name, email, password, avatar) {
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      headers: headers(),
      method: "POST",
      body: JSON.stringify({ name, email, password, avatar }),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(
        "Sorry, we were unable to register your account. Please check your email and password and try again."
      );
    }
  } catch (error) {
    throw error;
  }
}
