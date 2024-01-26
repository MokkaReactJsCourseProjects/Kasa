//Imports
import Logo from "../common/Logo";
import style from "./style.module.scss";

//Exports
export default function Footer() {
    return (
        <footer className={style.footer}>
            <Logo width={122} isWhite={true} />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
