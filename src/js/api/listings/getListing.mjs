import { BASE_URL } from "../constants.mjs";
import { headers } from "../headers.mjs";

export async function getListings() {
  try {
    const response = await fetch(
      `${BASE_URL}/listings?_seller=true&_bids=true&sort=created`,
      {
        method: "GET",
        headers: headers(),
      },
    );

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw new Error("Network error: Unable to fetch listings data.");
  }
}

export async function getActiveListings() {
  try {
    const response = await fetch(
      `${BASE_URL}/listings?_seller=true&_bids=true&_active=true&sort=created`,
      {
        method: "GET",
        headers: headers(),
      },
    );

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw new Error("Network error: Unable to fetch listings data.");
  }
}

export async function getEndingSoonListings() {
  try {
    const response = await fetch(
      `${BASE_URL}/listings?_seller=true&_bids=true&_active=true&sort=endsAt&sortOrder=asc&limit=9`,
      {
        method: "GET",
        headers: headers(),
      },
    );

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw new Error("Network error: Unable to fetch listings data.");
  }
}

export async function getListing(id) {
  try {
    if (!id) {
      throw new Error("Get requires a listing id");
    }

    const response = await fetch(
      `${BASE_URL}/listings/${id}?_seller=true&_bids=true`,
      {
        method: "GET",
        headers: headers(),
      },
    );

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw new Error(error);
  }
}
