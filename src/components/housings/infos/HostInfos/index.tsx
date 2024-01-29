//Imports
import { Host } from "../../../../types/host";
import style from "./style.module.scss";

//Types
type HostInfosProps = {
    host: Host;
};

//Exports
export default function HostInfos({ host }: HostInfosProps) {
    return (
        <div className={style.host}>
            <p className={style.name}>{host.name}</p>
            <img
                src={host.picture}
                alt="Photo de profil de l'hôte"
                className={style.picture}
            />
        </div>
    );
}
