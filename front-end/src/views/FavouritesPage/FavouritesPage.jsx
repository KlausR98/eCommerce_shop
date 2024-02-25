import { useLoaderData } from "react-router-dom";
import { FavouritesList } from "../../components/FavouriteProductList/FavouriteProductList";

export function FavouritesPage() {
    const favouriteProducts = useLoaderData();

    return (
        <FavouritesList favourites={favouriteProducts} />
    );
} 