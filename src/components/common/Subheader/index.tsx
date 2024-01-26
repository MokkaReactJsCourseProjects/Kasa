//Imports
import { Image } from "../../../types/misc";
import style from "./style.module.scss";

//Types
type SubheaderProps = {
    bgImage: Image;
    text?: string;
    overlayOpacity?: number;
};

//Exports
export default function Subheader({
    bgImage,
    text,
    overlayOpacity = 0.6,
}: SubheaderProps) {
    return (
        <section className={style.section}>
            <img
                src={bgImage}
                alt="Arrière-plan"
                className={style.background}
            />
            <div
                className={style.overlay}
                style={{ opacity: overlayOpacity }}
            />
            {text ? <h1 className={style.text}>{text}</h1> : null}
        </section>
    );
}
