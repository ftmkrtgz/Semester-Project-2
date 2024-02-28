import { remove } from "../../storage/remove.mjs";

export function logout() {
  remove("user");
  remove("token");
}
