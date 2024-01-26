//Imports
import { Host } from "./host";
import { Image } from "./misc";

//Exports
export type Housing = {
    id: string;
    title: string;
    description: string;
    location: string;
    cover: Image;
    pictures: Image[];
    rating: string;
    equipments: string[];
    tags: string[];
    host: Host;
};
