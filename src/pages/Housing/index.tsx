//Imports
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectHousings } from "../../utils/redux_toolkit/slices/housingsSlice";
import PictureCarousel from "../../components/housings/PictureCarousel";
import { Housing } from "../../types/housing";
import HousingInfos from "../../components/housings/HousingInfos";
import { useNavigate, useParams } from "react-router-dom";
import Paths from "../../types/paths";

//Exports
export default function HousingPage() {
    const { id } = useParams();
    const housings = useSelector(selectHousings);
    const navigate = useNavigate();
    const housing: Housing = useMemo(() => {
        return housings.list.find((elem: Housing) => elem.id === id);
    }, [id, housings.list]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //Redirect to 404 page if wrong housingId
    useEffect(() => {
        if (!housing && housings.loaded) {
            navigate(Paths.notFound);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [housing, housings.loaded]);

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
