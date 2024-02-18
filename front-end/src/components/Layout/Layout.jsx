import { Footer } from "../Footer/Footer";
import { MainMenu } from "../MainMenu/MainMenu";
import { Logo } from "../Logo/Logo";
import { CurrencySelector } from "../CurrenciesSelector/CurrenciesSelector";
import { IconMenu } from "../IconMenu/IconMenu";
import { TopBar } from "../TopBar/TopBar";
import { CategoryMenu } from "../CategoryMenu/CategoryMenu";
import { MainContent } from "../MainContent/MainContent";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <>
            <MainContent>
                <TopBar>
                    <MainMenu />
                    <Logo />
                    <div className="flex flex-column items-center justify-end gap-4">
                        <CurrencySelector />
                        <IconMenu />
                    </div>
                </TopBar>
                <CategoryMenu />
                <Outlet />
            </MainContent>
            <Footer />
        </>
    );
}
