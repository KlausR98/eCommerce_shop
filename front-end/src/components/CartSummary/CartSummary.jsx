import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import CarIcon from "../../assets/car.svg";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CURRENCIES, CURRENCY_SIGN } from "../../constants/currencies";

export function CartSummary({ cartProducts }) {
    const [currency] = useContext(CurrencyContext);

    const deliveryCosts = {
        [CURRENCIES.USD]: 10,
        [CURRENCIES.PLN]: 49,
    };

    const minSumsForFreeDelivery = {
        [CURRENCIES.USD]: 100,
        [CURRENCIES.PLN]: 490,
    };

    const currencySign = CURRENCY_SIGN[currency];

    const deliveryCost = deliveryCosts[currency];
    const minSumForFreeDelivery = minSumsForFreeDelivery[currency];

    let sum = 0;
    cartProducts.forEach((cartProduct) => {
        sum += currency === CURRENCIES.PLN ? cartProduct.pricePLN : cartProduct.priceUSD;
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
                    <p>{sum}{currencySign}</p>
                </div>
                <div className="flex flex-row justify-between pt-4">
                    <p>Koszt dostawy:</p>
                    <p>{sum > minSumForFreeDelivery ? 0 : deliveryCost}{currencySign}</p>
                </div>
                <div className="flex flex-row justify-between pt-4">
                    <p className="font-semibold">Do zapłaty:</p>
                    <p className="font-semibold">{totalCost}{currencySign}</p>
                </div>
            </div>
            <FullWidthButton background={'#222020'}>DO KASY</FullWidthButton>
            <div className="bg-[#F4F4F4] mt-4 flex flex-row p-4 justify-between">
                <img
                    src={CarIcon}
                    className=""
                />
                <p className="font-semibold">Darmowa dostawa od {minSumForFreeDelivery}{currencySign}</p>
            </div>
        </div>
    );
}