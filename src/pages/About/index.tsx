//Imports
import images from "../../assets/images";
import Subheader from "../../components/common/Subheader";
import Dropdown from "../../components/common/Dropdown";
import style from "./style.module.scss";
import { useWindow } from "../../utils/hooks";

//Exports
export default function AboutPage() {
    const { isMobile } = useWindow();

    return (
        <main>
            <Subheader bgImage={images.landscape2} overlayOpacity={0.3} />
            <div className={style.details}>
                <Dropdown
                    title={`Fiabilité`}
                    titleFontSize={isMobile ? 13 : 24}
                >
                    <p>
                        Les annonces postées sur Kasa garantissent une fiabilité
                        totale. Les photos sont conformes aux logements, et
                        toutes les informations sont régulièrement vérifiées par
                        nos équipes.
                    </p>
                </Dropdown>
                <Dropdown title={`Respect`} titleFontSize={isMobile ? 13 : 24}>
                    <p>
                        La bienveillance fait partie des valeurs fondatrices de
                        Kasa. Tout comportement discriminatoire ou de
                        perturbation du voisinage entraînera une exclusion de
                        notre plateforme.
                    </p>
                </Dropdown>
                <Dropdown title={`Service`} titleFontSize={isMobile ? 13 : 24}>
                    <p>
                        La bienveillance fait partie des valeurs fondatrices de
                        Kasa. Tout comportement discriminatoire ou de
                        perturbation du voisinage entraînera une exclusion de
                        notre plateforme.
                    </p>
                </Dropdown>
                <Dropdown title={`Sécurité`} titleFontSize={isMobile ? 13 : 24}>
                    <p>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos
                        hôtes que pour les voyageurs, chaque logement correspond
                        aux critères de sécurité établis par nos services. En
                        laissant une note aussi bien à l'hôte qu'au locataire,
                        cela permet à nos équipes de vérifier que les standards
                        sont bien respectés. Nous organisons également des
                        ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                </Dropdown>
            </div>
        </main>
    );
}
