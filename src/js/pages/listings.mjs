import { getListings } from "../api/listings/getListing.mjs";
import { renderErrorMessage } from "../templates/components/error.mjs";
import { renderListingsCardTemplates } from "../templates/components/listingCard.mjs";

export async function renderListingsPage() {
  const listingsContainer = document.querySelector("#listingsContainer");

  const renderListings = async (listings) => {
    try {
      renderListingsCardTemplates(listings, listingsContainer);
    } catch (error) {
      renderErrorMessage(error, listingsContainer);
    }
  };

  try {
    const listings = await getListings();
    renderListings(listings);
  } catch (error) {
    renderErrorMessage(error, listingsContainer);
  }
}
