//Imports
import { useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import images from "../../../assets/images";

//Types
type DropdownProps = {
    title: string;
    titleFontSize: number;
    children: React.ReactNode;
};

//Exports
export default function Dropdown({
    title,
    titleFontSize,
    children,
}: DropdownProps) {
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);
    const [contentY, setContentY] = useState(0);
    const [opened, setOpened] = useState(false);
    const chevronName = opened ? "Fermer" : "Ouvrir";
    useEffect(() => {
        if (contentRef.current) {
            setContentY(contentRef.current.offsetHeight);
        }
    }, [opened]);

    const handleClick = () => {
        if (opened) {
            setOpened(false);
            if (contentRef.current) {
                setContentHeight(0);
            }
        } else {
            setOpened(true);
            if (contentRef.current) {
                setContentHeight(contentRef.current.offsetHeight);
            }
        }
    };

    return (
        <div className={style.dropdown}>
            <button
                className={style.interactible}
                title={chevronName}
                onClick={handleClick}
                style={{ fontSize: `${titleFontSize}px` }}
            >
                {title}
                <img
                    src={images.chevronDown}
                    alt={chevronName}
                    style={{ transform: `rotate(${opened ? 180 : 0}deg)` }}
                />
            </button>
            <main
                className={style.contentContainer}
                style={{ height: `${contentHeight}px` }}
            >
                <div
                    ref={contentRef}
                    className={style.content}
                    style={{ top: `${-3 * contentY + contentHeight * 3}px` }}
                >
                    {children}
                </div>
            </main>
        </div>
    );
}
