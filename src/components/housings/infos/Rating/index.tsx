//Imports
import { useMemo } from "react";
import style from "./style.module.scss";
import images from "../../../../assets/images";

//Types
type RatingProps = {
    score: string;
};

//Exports
export default function Rating({ score }: RatingProps) {
    const maxStars = 5;
    const stars = useMemo(() => {
        return Array.from(
            { length: maxStars },
            (_, index) => index < Number(score)
        );
    }, [score]);

    return (
        <ul className={style.rating}>
            {stars.map((star, index) => (
                <li key={index}>
                    <img
                        src={star ? images.starActive : images.starInactive}
                        alt={`Évaluation`}
                        draggable={false}
                        className={style.star}
                    />
                </li>
            ))}
        </ul>
    );
}
