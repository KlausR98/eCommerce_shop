import CarIcon from "../../assets/car.svg";
import ReverseIcon from "../../assets/return.svg";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import { AcordionContent } from "../AcordionContent/AcordionContent";

export function ProductDetail({ product }) {
    const accordionContent = [
        {
            title: "Opis produktu",
            content: product[0].description,
        },
        {
            title: "Wskazówki pielęgnacyjne",
            content: product[0].maintenanceInfo,
        },
    ];

    return (
        <div className="ml-24 flex flex-col w-full">

            <h2 className="font-semibold">{product[0].brand}</h2>
            <h3>{product[0].productName}</h3>
            <h2 className="text-[#C60C0C] pb-8">{product[0].pricePLN}zł</h2>

            <FullWidthButton background={'#222020'} width={'full'}>DODAJ DO KOSZYKA</FullWidthButton>

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