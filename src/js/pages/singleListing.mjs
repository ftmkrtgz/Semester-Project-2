import { getListing } from "../api/listings/getListing.mjs";
import { renderErrorMessage } from "../templates/components/error.mjs";
import { renderSellerTemplate } from "../templates/components/seller.mjs";
import { renderBiddingHistoryTemplate } from "../templates/components/bidder.mjs";
import { startCounter } from "../setting/counter.mjs";

export async function renderSingleListingPage() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");

  const listing = await getListing(id);

  const listingImage = document.querySelector("#listingImageContainer");
  const listingTitle = document.querySelector("#listingTitle");

  const listingEndsAt = document.querySelector("#listingEndsAt");
  const listingBids = document.querySelector("#listingBids");

  const biddingHistoryContainer = document.querySelector(
    "#biddingHistoryContainer",
  );
  const sellerContainer = document.querySelector("#sellerContainer");

  document.title = listing.title;
  listingImage.src = listing.media[0] ?? `/images/placeholder.png`;
  listingTitle.innerHTML = listing.title;

  const endDate = new Date(listing.endsAt);
  startCounter(endDate, listingEndsAt);
  const amounts = listing.bids.map((bid) => bid.amount);
  const maxAmount = Math.max(...amounts);

  if (maxAmount > 0) {
    listingBids.innerHTML += ` ${maxAmount} $`;
  } else {
    listingBids.innerHTML += `0 $`;
  }

  if (Array.isArray(listing.bids) && listing.bids.length === 0) {
    renderErrorMessage(
      "The item dosn't have any bids yet",
      biddingHistoryContainer,
    );
  } else {
    renderBiddingHistoryTemplate(listing.bids, biddingHistoryContainer);
  }
  renderSellerTemplate(listing.seller, sellerContainer);
}
