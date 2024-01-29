//Imports
import { Housing } from "../../../../types/housing";
import HostInfos from "../HostInfos";
import Rating from "../Rating";

//Types
type RightPartProps = {
    housing: Housing;
};

//Exports
export default function RightPart({ housing }: RightPartProps) {
    return (
        <div>
            <HostInfos host={housing.host} />
            <Rating score={housing.rating} />
        </div>
    );
}
