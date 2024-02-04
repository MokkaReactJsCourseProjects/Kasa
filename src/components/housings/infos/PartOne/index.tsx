//Imports
import { Housing } from "../../../../types/housing";
import Tag from "../Tag";
import style from "./style.module.scss";

//Types
type PartOneProps = {
    housing: Housing;
};

//Exports
export default function PartOne({ housing }: PartOneProps) {
    return (
        <div className={style.part}>
            <h2 className={style.housingTitle}>{housing.title}</h2>
            <p className={style.location}>{housing.location}</p>
            <ul className={style.tags}>
                {housing.tags.map((tag) => (
                    <Tag key={tag} name={tag} />
                ))}
            </ul>
        </div>
    );
}
