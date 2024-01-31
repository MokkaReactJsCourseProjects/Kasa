//Imports
import Paths from "../../../types/paths";
import style from "./style.module.scss";
import Logo from "../../common/Logo";
import PageLink from "../PageLink";
import { Link } from "react-router-dom";

//Exports
export default function Header() {
    return (
        <header className={style.header}>
            <Link to={Paths.home}>
                <Logo />
            </Link>
            <nav className={style.links}>
                <PageLink name={`Accueil`} path={Paths.home} />
                <PageLink name={`À propos`} path={Paths.about} />
            </nav>
        </header>
    );
}
