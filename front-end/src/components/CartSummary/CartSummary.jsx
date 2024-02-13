import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import CarIcon from "../../assets/car.svg";

export function CartSummary({ cartProducts }) {
    const deliveryCost = 49;
    const minSumForFreeDelivery = 500;

    let sum = 0;
    cartProducts.forEach((cartProduct) => {
        sum += cartProduct.pricePLN;
    });

    const totalCost = sum > minSumForFreeDelivery ? sum : sum + deliveryCost;

    return (
        <div className="pt-4">
            <h2 className="font-semibold px-4 pt-4">Podsumowanie</h2>
            <div className="w-full border-t-2 border-solid 
            border-[#7A7A7A] py-4"
            >
                <div className="flex flex-row justify-between pt-4">
                    <p>Wartość produktów:</p>
                    <p>{sum}zł</p>
                </div>
                <div className="flex flex-row justify-between pt-4">
                    <p>Koszt dostawy:</p>
                    <p>{sum > minSumForFreeDelivery ? 0 : deliveryCost}zł</p>
                </div>
                <div className="flex flex-row justify-between pt-4">
                    <p className="font-semibold">Do zapłaty:</p>
                    <p className="font-semibold">{totalCost}zł</p>
                </div>
            </div>
            <FullWidthButton background={'#222020'}>DO KASY</FullWidthButton>
            <div className="bg-[#F4F4F4] mt-4 flex flex-row p-4 justify-between">
                <img
                    src={CarIcon}
                    className=""
                />
                <p className="font-semibold">Darmowa dostawa od {minSumForFreeDelivery}zł</p>
            </div>
        </div>
    );
}