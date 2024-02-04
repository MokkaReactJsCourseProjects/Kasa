//Imports
import { Link } from "react-router-dom";
import Paths from "../../../types/paths";
import { usePage } from "../../../utils/hooks";
import style from "./style.module.scss";

//Types
type PageLinkProps = {
    name: string;
    path: Paths;
};

//Exports
export default function PageLink({ name, path }: PageLinkProps) {
    const { currentPath } = usePage();

    return (
        <Link
            to={path}
            className={`link-default ${
                path === currentPath ? `underlined` : null
            } ${style.link}`}
        >
            {name}
        </Link>
    );
}
