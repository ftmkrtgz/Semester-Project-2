import { BASE_URL } from "../constants.mjs";
import { headers } from "../headers.mjs";

export async function getProfiles() {
  try {
    const response = await fetch(`${BASE_URL}/profiles`, {
      method: "GET",
      headers: headers(),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw new Error("Network error: Unable to fetch profiles data.");
  }
}

export async function getProfile(name) {
  try {
    if (!name) {
      throw new Error("Get requires a profile name");
    }

    const response = await fetch(`${BASE_URL}/profiles/${name}?_listings=true`, {
      method: "GET",
      headers: headers(),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw new Error(error);
  }
}
