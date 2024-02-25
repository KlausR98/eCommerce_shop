import CarIcon from "../../assets/car.svg";
import ReverseIcon from "../../assets/return.svg";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import { AcordionContent } from "../AcordionContent/AcordionContent";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function ProductDetail({ product }) {
    const [, addProductToCart] = useContext(CartContext);

    const accordionContent = [
        {
            title: "Opis produktu",
            content: product.description,
        },
        {
            title: "Wskazówki pielęgnacyjne",
            content: product.maintenanceInfo,
        },
    ];

    return (
        <div className="ml-24 flex flex-col w-full">

            <h2 className="font-semibold">{product.brand}</h2>
            <h3>{product.productName}</h3>
            <h2 className="text-[#C60C0C] pb-8">{product.pricePLN}zł</h2>

            <FullWidthButton
                onClick={() => {
                    addProductToCart(product);
                }}
                background={'#222020'}
                width={'full'}
            >
                DODAJ DO KOSZYKA
            </FullWidthButton>

            <ul className=" flex flex-col">
                <li className="flex flex-row items-center gap-4 pb-2">
                    <img
                        src={CarIcon}
                        className="w-[28px] h-[28px]"
                    />
                    <p>Dostawa do 24h</p>
                </li>
                <li className="flex flex-row items-center gap-4">
                    <img
                        className="w-[28px] h-[28px]"
                        src={ReverseIcon}
                    />
                    <p>Zwrot do 100 dni!</p>
                </li>
            </ul>

            <AcordionContent items={accordionContent} />

        </div>
    );
}