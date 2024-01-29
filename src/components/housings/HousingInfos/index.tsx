//Imports
import { Housing } from "../../../types/housing";
import LeftPart from "../infos/LeftPart";
import RightPart from "../infos/RightPart";
import style from "./style.module.scss";

//Types
type HousingInfosProps = {
    housing: Housing | undefined;
};

//Exports
export default function HousingInfos({ housing }: HousingInfosProps) {
    return (
        <section className={style.section}>
            <div className={style.mainInfos}>
                <LeftPart housing={housing} />
                <RightPart housing={housing} />
            </div>
            <div className={style.details}>
                <p>Description details</p>
                <p>Equipement details</p>
            </div>
        </section>
    );
}
