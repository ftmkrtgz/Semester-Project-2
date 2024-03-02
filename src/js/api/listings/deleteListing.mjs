import { BASE_URL } from "../constants.mjs";
import { headers } from "../headers.mjs";

const action = "/listings";
const method = "delete";

export async function deleteListing(id) {
  const removePostURL = `${BASE_URL}${action}/${id}`;

  const response = await fetch(removePostURL, {
    method,
    headers: headers(),
  });
  window.location.replace("/profile/");
  return await response.json();
}
