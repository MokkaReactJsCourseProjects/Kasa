//Imports
import { Housing } from "../../../../types/housing";
import HostInfos from "../HostInfos";
import Rating from "../Rating";
import style from "./style.module.scss";

//Types
type PartTwoProps = {
    housing: Housing;
};

//Exports
export default function PartTwo({ housing }: PartTwoProps) {
    return (
        <div className={style.part}>
            <HostInfos host={housing.host} />
            <Rating score={housing.rating} />
        </div>
    );
}
