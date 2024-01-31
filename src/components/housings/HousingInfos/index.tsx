//Imports
import { Housing } from "../../../types/housing";
import Dropdown from "../../common/Dropdown";
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
                <Dropdown title="Description" titleFontSize={18}>
                    <p className={style.description}>{housing.description}</p>
                </Dropdown>
                <Dropdown title="Équipements" titleFontSize={18}>
                    <ul className={style.equipmentList}>
                        {housing.equipments.map((equipment) => (
                            <li key={equipment}>{equipment}</li>
                        ))}
                    </ul>
                </Dropdown>
            </div>
        </section>
    );
}
