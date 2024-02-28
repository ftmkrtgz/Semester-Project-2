import { BASE_URL } from "../constants.mjs";
import { headers } from "../headers.mjs";

export const deleteListing = async function (id) {
  const url = `${BASE_URL}listings/${id}`;

  let myHeaders = headers();

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
  };

  const response = await fetch(url, requestOptions);

  if (response.ok) {
    return true;
  }

  const json = await response.json();
  if (json.errors[0].message) {
    throw new Error(json.errors[0].message);
  }

  throw new Error(response.statusText);
};
