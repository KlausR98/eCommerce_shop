import { CenterContent } from "../CenterContent/CenterContent"
import { FullWidthButton } from "../FullWidthButton/FullWidthButton"

export function Hero({ heroImage }) {
    return (
        <div className="w-full h-[500px] bg-cover"
            style={{ backgroundImage: `url(${heroImage})` }}>
            <CenterContent>

                <div className=" w-[453px] mt-20 ml-32
                h-[242px] px-20 py-12 bg-white 
                bg-opacity-50 flex-col justify-start items-start gap-4 
                inline-flex">
                    <h2 className="text-2xl font-[750]">Letnie promocje do -70%!</h2>
                    <p>Tylko najlepsze okazje!</p>
                    <FullWidthButton>SPRAWDŹ PRODUKTY</FullWidthButton>
                </div>

            </CenterContent>
        </div>

    )
}