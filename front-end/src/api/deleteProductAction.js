import { BACK_END_URL } from "../constants/api";

export function deleteProductAction({ params }) {
  return fetch(`${BACK_END_URL}/product/${params.cartProduct.id}`, {
    method: "DELETE"
  });
}
