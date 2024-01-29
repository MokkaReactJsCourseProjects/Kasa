//Imports
import { useMemo } from "react";
import { usePage } from "../../utils/hooks";
import { useSelector } from "react-redux";
import { selectHousings } from "../../utils/redux_toolkit/slices/housingsSlice";
import PictureCarousel from "../../components/housings/PictureCarousel";
import { Housing } from "../../types/housing";
import HousingInfos from "../../components/housings/HousingInfos";

//Exports
export default function HousingPage() {
    const housings = useSelector(selectHousings);
    const { currentPath } = usePage();
    const housingId = currentPath.split("/")[2];

    const housing: Housing = useMemo(() => {
        return housings.list.find((elem) => elem.id === housingId);
    }, [housingId, housings.list]);

    if (!housing) {
        return null;
    }

    return (
        <main>
            <PictureCarousel pictures={housing.pictures} />
            <HousingInfos housing={housing} />
        </main>
    );
}
