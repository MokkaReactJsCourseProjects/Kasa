//Imports
import images from "../../../assets/images";
import style from "./style.module.scss";

//Types
type CarouselArrowProps = {
    name: string;
    index: number;
    maxIndex: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
    increment: number;
};

//Exports
export default function CarouselArrow({
    name,
    index,
    maxIndex,
    setIndex,
    increment,
}: CarouselArrowProps) {
    const handleClick = () => {
        if (index + increment < 0) {
            setIndex((prev) => prev + increment + maxIndex);
        } else {
            if (index + increment >= maxIndex) {
                setIndex((prev) => prev + increment - maxIndex);
            } else {
                setIndex((prev) => prev + increment);
            }
        }
    };

    return (
        <button className={style.arrow} onClick={handleClick} title={name}>
            <img
                src={increment < 0 ? images.chevronLeft : images.chevronRight}
                alt={name}
                draggable={false}
            />
        </button>
    );
}
