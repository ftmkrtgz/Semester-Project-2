import { BASE_URL } from "../constants.mjs";
import { headers } from "../headers.mjs";

export async function addBid(bid, id) {
  try {
    if (!id) {
      throw new Error("Bid requires a listing id");
    }

    const response = await fetch(`${BASE_URL}/listings/${id}/bids`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({ amount: bid }),
    });

    if (response.ok) {
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
