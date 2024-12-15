import { BACK_END_URL } from "../constants/api";

export function deleteFavouritesAction({ params }) {
  return fetch(`${BACK_END_URL}/favourites/${params.favouriteId}`, {
    method: "DELETE",
  });
}
