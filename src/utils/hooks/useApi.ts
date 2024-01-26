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
            setTimeout(() => {
                //To simulate latency
                setData(newData);
                setIsLoading(false);
            }, Math.random() * 2000);
        };
        fetchData();
    }, []);

    return { data, isLoading };
}
