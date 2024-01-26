//Imports
import Paths from "../../../types/paths";
import style from "./style.module.scss";
import Logo from "../../common/Logo";
import PageLink from "../PageLink";

//Exports
export default function Header() {
    return (
        <header className={style.header}>
            <Logo />
            <nav className={style.links}>
                <PageLink name={`Accueil`} path={Paths.home} />
                <PageLink name={`À propos`} path={Paths.about} />
            </nav>
        </header>
    );
}
