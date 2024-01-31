//Imports
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import Paths from "../../types/paths";

//Exports
export default function NotFoundPage() {
    return (
        <main className={style.main}>
            <p className={style.code}>404</p>
            <p className={style.message}>
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to={Paths.home} className={style.goHome}>
                Retourner sur la page d'accueil
            </Link>
        </main>
    );
}
