//Imports
import images from "../../../assets/images";

//Types
type LogoProps = {
    width: number;
    isWhite?: boolean;
};

//Exports
export default function Logo({ width, isWhite = false }: LogoProps) {
    return (
        <img
            src={isWhite ? images.logoWhite : images.logo}
            alt={`Logo Kasa`}
            draggable={false}
            style={{ width }}
        />
    );
}
