import { CenterContent } from "../CenterContent/CenterContent";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";

export function FavouritesList({ favouriteProducts }) {
    return (
        <CenterContent >
            <div className="bg-[#F4F4F4] mt-4">
                <h2 className="font-semibold px-4 pt-4">Ulubione</h2>
                <div className="px-4">
                    {favouriteProducts.map((favouriteProduct) => {
                        return (
                            <FavouriteProduct
                                key={favouriteProduct.id}
                                favouriteProduct={favouriteProduct}
                            />
                        )
                    })}
                </div>
            </div>
        </CenterContent >
    );
}