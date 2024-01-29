//Imports
import { useEffect, useState } from "react";

//Exports
export default function useApi() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/housings.json");
            const newData = await response.json();
            setData(newData);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return { data, isLoading };
}
