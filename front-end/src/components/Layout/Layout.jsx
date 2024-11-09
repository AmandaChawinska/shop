import { CategoryMenu } from "../CategoryMenu/CategoryMenu";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { Footer } from "../Footer/Footer";
import { IconMenu } from "../IconMenu/IconMenu";
import { Logo } from "../Logo/Logo";
import { MainMenu } from "../MainMenu/MainMenu";
import { TopBar } from "../TopBar/TopBar";

export function Layout() {
  return (
    <>
      <TopBar>
        <MainMenu />
        <Logo />
        <div>
          <CurrencySelector />
          <IconMenu />
        </div>
      </TopBar>
      <CategoryMenu />
      <Footer />
    </>
  );
}
