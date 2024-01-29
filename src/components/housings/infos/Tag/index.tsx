//Imports
import style from "./style.module.scss";

//Types
type TagProps = {
    name: string;
};

//Exports
export default function Tag({ name }: TagProps) {
    return <p className={style.tag}>{name}</p>;
}
