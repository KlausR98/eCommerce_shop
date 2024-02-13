import RemoveIcon from "../../assets/remove.svg";
import BagIcon from "../../assets/bag.svg";
import { NavLink } from "react-router-dom";

export function FavouriteProduct({ favouriteProduct }) {
    return (

        <div className="w-full border-t-2 border-solid border-[#7A7A7A] 
        flex flex-start py-4"
        >
            <img
                src={favouriteProduct.photos[2]}
                alt="productPhoto"
                className="h-[140px] w-[85px]"
            />
            <div className="px-12 flex flex-col justify-between w-full">
                <div className=" w-full">
                    <p className="font-semibold flex flex-row w-full 
                    justify-between pb-[17px] "
                    >
                        <p>{favouriteProduct.productName}</p>
                        <p>{favouriteProduct.pricePLN}zł</p>
                    </p>
                    <div className="flex flex-start gap-1">
                        <p className="text-[#7A7A7A]">Cena:</p>
                        <p className="font-semibold">
                            {favouriteProduct.pricePLN}zł
                        </p>
                    </div>
                </div>
                <div className=" flex flex-row flex-start gap-8 items-center">
                    <NavLink className="flex flex-row items-center gap-2 pb-4">
                        <img
                            src={RemoveIcon}
                            alt="RemoveIcon"
                            className="w-[16px] h-[16px]"
                        />
                        <p>Usuń</p>
                    </NavLink>
                    <NavLink className="flex flex-row items-center gap-2 pb-4">
                        <img
                            src={BagIcon}
                            alt="BagIcon"
                            className="w-[16px] h-[16px]"
                        />
                        <p>Dodaj do koszyka</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}