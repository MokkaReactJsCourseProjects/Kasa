//Imports
import { Link } from "react-router-dom";
import { Housing } from "../../../types/housing";
import style from "./style.module.scss";
import Paths from "../../../types/paths";

//Types
type HousingCardProps = {
    housing: Housing;
};

//Exports
export default function HousingCard({ housing }: HousingCardProps) {
    return (
        <article className={style.card}>
            <Link to={`${Paths.housing}/${housing.id}`}>
                <img
                    src={housing.cover}
                    alt="Miniature"
                    className={style.thumbnail}
                />
                <div className={style.overlay} />
                <h2 className={style.name}>{housing.title}</h2>
            </Link>
        </article>
    );
}
