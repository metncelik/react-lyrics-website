import { useEffect, useState } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("could not fetch");
                }
                return res.json()
            })
            .then(data => {
                setIsLoading(false);
                setData(data);
                setError(null);
            }
            ).catch(
                e => {
                    setIsLoading(false);
                    setError(e.message);

                }
            );
    }, [url]);


    return {data, error, isLoading};
}

export default useFetch;