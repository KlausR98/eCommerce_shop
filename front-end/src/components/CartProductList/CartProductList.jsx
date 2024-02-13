import { CenterContent } from "../CenterContent/CenterContent";
import { CartProduct } from "../CartProduct/CartProduct";

export function CartPoductList({ cartProducts }) {
    return (
        <CenterContent >
            <div className="bg-[#F4F4F4] mt-4">
                <h2 className="font-semibold px-4 pt-4">Koszyk</h2>
                <div className="px-4">
                    {cartProducts.map((cartProduct) => {
                        return (
                            <CartProduct
                                key={cartProduct.id}
                                cartProduct={cartProduct}
                            />
                        )
                    })}
                </div>
            </div>
        </CenterContent >
    );
}