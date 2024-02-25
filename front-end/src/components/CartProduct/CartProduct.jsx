import RemoveIcon from "../../assets/remove.svg";
import { Price } from "../Price/Price";
import { useFetcher } from "react-router-dom";

export function CartProduct({ cartProduct }) {
    const price = <Price product={cartProduct} />;
    const { Form } = useFetcher();

    return (

        <div className="w-full border-t-2 border-solid border-[#7A7A7A] 
        flex flex-start py-4"
        >
            <img
                src={cartProduct.photos[0]}
                alt="productPhoto"
                className="h-[140px] w-[85px]"
            />
            <div className="px-12 flex flex-col justify-between w-full">
                <div className=" w-full">
                    <div className="font-semibold flex flex-row w-full 
                    justify-between pb-[17px] "
                    >
                        <p>{cartProduct.productName}</p>
                        <p>{price}</p>
                    </div>
                    <div className="flex flex-start gap-1">
                        <p className="text-[#7A7A7A]">Cena:</p>
                        <p className="font-semibold">
                            {price}
                        </p>
                    </div>
                </div>
                <div className=" flex flex-row flex-start gap-8 items-center">
                    <Form
                        action={`/delete-from-cart/${cartProduct.id}`}
                        method="DELETE"
                    >
                        <button className="flex flex-row items-center gap-2 pb-4">
                            <img
                                src={RemoveIcon}
                                alt="RemoveIcon"
                                className="w-[16px] h-[16px]"
                            />
                            <p>Usuń</p>
                        </button>
                    </Form>
                    {/* <NavLink className="flex flex-row items-center gap-2 pb-4">
                        <img
                            src={BagIcon}
                            alt="BagIcon"
                            className="w-[16px] h-[16px]"
                        />
                        <p>Dodaj do koszyka</p>
                    </NavLink> */}
                </div>
            </div>
        </div>
    );
}