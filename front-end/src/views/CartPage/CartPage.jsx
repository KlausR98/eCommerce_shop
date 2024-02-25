import { CartPoductList } from "../../components/CartProductList/CartProductList";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { CartSummary } from "../../components/CartSummary/CartSummary";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function CartPage() {
    const cartItems = useContext(CartContext);

    return (
        <FlexContainer>
            <CartPoductList cartProducts={cartItems} />
            <CartSummary cartProducts={cartItems} />
        </FlexContainer>
    );
}