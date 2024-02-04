//Imports
import { Housing } from "../../../types/housing";
import { useWindow } from "../../../utils/hooks";
import Dropdown from "../../common/Dropdown";
import PartOne from "../infos/PartOne";
import PartTwo from "../infos/PartTwo";
import style from "./style.module.scss";

//Types
type HousingInfosProps = {
    housing: Housing | undefined;
};

//Exports
export default function HousingInfos({ housing }: HousingInfosProps) {
    const { isMobile } = useWindow();

    return (
        <section className={style.section}>
            <div className={style.mainInfos}>
                <PartOne housing={housing} />
                <PartTwo housing={housing} />
            </div>
            <div className={style.details}>
                <Dropdown
                    title="Description"
                    titleFontSize={isMobile ? 13 : 18}
                >
                    <p className={style.description}>{housing.description}</p>
                </Dropdown>
                <Dropdown
                    title="Équipements"
                    titleFontSize={isMobile ? 13 : 18}
                >
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
