//Imports
import { logo, logoWhite } from "../../../assets/images";

//Types
type LogoProps = {
    width?: number;
    isWhite?: boolean;
};

//Exports
export default function Logo({ width = 210, isWhite = false }: LogoProps) {
    return (
        <img
            src={isWhite ? logoWhite : logo}
            alt={`Logo Kasa`}
            style={{ width }}
        />
    );
}
