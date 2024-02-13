import { CURRENCIES } from "../../constants/currencies";


export function CurrencySelector() {
    return (
        <select className=" p-2 bg-[#EFEFEF] border-2 border-[#767676] ">
            <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
            <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
        </select>
    );
}