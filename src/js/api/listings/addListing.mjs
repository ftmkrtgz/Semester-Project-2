import { BASE_URL } from "../constants.mjs";
import { headers } from "../headers.mjs";

export async function addListing(listing) {
  try {
    const response = await fetch(`${BASE_URL}/listings`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({
        media: listing.media.split(","),
        title: listing.title,
        description: listing.description,
        endsAt: listing.endsAt,
        tags: listing.tags.split(","),
      }),
    });
    if (response.ok) {
      alert("Thanks, your product is on sale.");
      window.location.replace("/products/");
      return await response.json();
    } else {
      const errorResponse = await response.json();
      const errorMessage = errorResponse.errors[0].message;
      throw new Error(errorMessage);
    }
  } catch (error) {
    throw error;
  }
}
