import { getEndingSoonListings } from "../api/listings/getListing.mjs";
import { renderListingsCardTemplates } from "../templates/components/listingCard.mjs";

export async function renderHomePage() {
  const featuredContainer = document.querySelector("#currentAuctionsContainer");
  try {
    const listings = await getEndingSoonListings();
    renderListingsCardTemplates(listings, featuredContainer);
  } catch (error) {
    throw error;
  }
}
