//Imports
import { useLocation } from "react-router-dom";

//Exports
export default function usePage() {
    const location = useLocation();
    const currentPath = location.pathname;
    return { currentPath };
}
