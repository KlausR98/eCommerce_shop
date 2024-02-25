import { CURRENCIES } from "../../constants/currencies";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";

export function CurrencySelector() {
    const [currency, setCurrency] = useContext(CurrencyContext);

    return (
        <select
            value={currency}
            onChange={(e) => {
                setCurrency(e.currentTarget.value);
                localStorage["selected_currency"] = e.currentTarget.value;
            }}
            className=" p-2 bg-[#EFEFEF] border-2 border-[#767676] "
        >
            <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
            <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
        </select>
    );
}

