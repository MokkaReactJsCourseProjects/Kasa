//Imports
import { useState } from "react";
import { Image } from "../../../types/misc";
import style from "./style.module.scss";
import CarouselArrow from "../../common/CarouselArrow";
import { useWindow } from "../../../utils/hooks";

//Types
type PictureCarouselProps = {
    pictures: Image[];
};

//Exports
export default function PictureCarousel({ pictures }: PictureCarouselProps) {
    const { isMobile } = useWindow();
    const [selected, setSelected] = useState(0);
    const pictureAmount = pictures.length;

    return (
        <div className={style.carousel}>
            <img
                src={pictures[selected]}
                alt="Illustration du logement"
                className={style.selectedPicture}
            />
            {pictureAmount > 1 ? (
                <>
                    {isMobile === false ? (
                        <p className={style.selectionText}>{`${
                            selected + 1
                        }/${pictureAmount}`}</p>
                    ) : null}
                    <div className={style.arrows}>
                        <CarouselArrow
                            name="Précédent"
                            index={selected}
                            maxIndex={pictureAmount}
                            setIndex={setSelected}
                            increment={-1}
                        />
                        <CarouselArrow
                            name="Suivant"
                            index={selected}
                            maxIndex={pictureAmount}
                            setIndex={setSelected}
                            increment={1}
                        />
                    </div>
                </>
            ) : null}
        </div>
    );
}
