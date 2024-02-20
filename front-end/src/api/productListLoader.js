import { redirect } from "react-router-dom";
import { BACK_END_URL, PATH_TO_ENDPOINT_MAPPING } from "../constants/api";
import { CATEGORIES } from "../constants/categories";

export function productListLoader({
  params: { gender, category, subCategory },
  request
}) {
  const pageUrl = new URL(request.url);
  const page = pageUrl.searchParams.get("page") || 1;
  const foundCategory = CATEGORIES.find((c) => c.path === category);
  const foundGender = PATH_TO_ENDPOINT_MAPPING[gender];

  if (foundCategory && foundGender) {
    let url = `${BACK_END_URL}/products/?gender=${PATH_TO_ENDPOINT_MAPPING[gender]}&category=${category}`;

    if (subCategory) {
      const foundSubCategory = foundCategory.subCategories.find(
        (sc) => sc.path === subCategory
      );
      if (foundSubCategory) {
        url = `${url}&subCategory=${subCategory}`;
      } else {
        return redirect("/kobieta");
      }
    }

    url = `${url}&_limit=8&_page=${page}`;

    return fetch(url).then((response) => {
      const numberOfPages = Math.ceil(
        Number(response.headers.get("X-Total-Count")) / 8
      );

      return response.json().then((products) => {
        return {
          products,
          numberOfPages
        };
      });
    });
  } else {
    redirect("/kobieta");
  }
}
