//Imports
import images from "../../assets/images";
import Subheader from "../../components/common/Subheader";
import HousingList from "../../components/housings/HousingList";

//Exports
export default function HomePage() {
    return (
        <main>
            <Subheader
                bgImage={images.landscape1}
                text={`Chez vous, partout et ailleurs`}
            />
            <HousingList />
        </main>
    );
}
