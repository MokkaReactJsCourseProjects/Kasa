//Imports
import { useSelector } from "react-redux";
import { selectHousings } from "../../../utils/redux_toolkit/slices/housingsSlice";
import HousingCard from "../HousingCard";
import { Housing } from "../../../types/housing";
import style from "./style.module.scss";

//Exports
export default function HousingList() {
    const housings = useSelector(selectHousings);

    return (
        <ul className={style.list}>
            {housings.loaded ? (
                housings.list.map((housing: Housing) => (
                    <li key={housing.id}>
                        <HousingCard housing={housing} />
                    </li>
                ))
            ) : (
                <p className={style.loadingText}>Chargement...</p>
            )}
        </ul>
    );
}
