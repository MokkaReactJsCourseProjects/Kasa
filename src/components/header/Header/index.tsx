//Imports
import Paths from "../../../types/paths";
import style from "./style.module.scss";
import Logo from "../../common/Logo";
import PageLink from "../PageLink";
import { Link } from "react-router-dom";
import { useWindow } from "../../../utils/hooks";

//Exports
export default function Header() {
    const { isMobile } = useWindow();

    return (
        <header className={style.header}>
            <Link to={Paths.home}>
                <Logo width={isMobile ? 145 : 210} />
            </Link>
            <nav className={style.links}>
                <PageLink name={`Accueil`} path={Paths.home} />
                <PageLink name={`À propos`} path={Paths.about} />
            </nav>
        </header>
    );
}
