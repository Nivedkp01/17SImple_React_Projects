import React, { useEffect, useState } from 'react';

function useFetch(url) {
    const [data, setData] = useState([]);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState('');

    async function fetchData() {
        try {
            setPending(true);
            const res = await fetch(url);
            const result = await res.json();
            setData(result);
            setPending(false);
        } catch (e) {
            setError(e);
            setPending(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]); // Include 'url' in the dependency array to refetch data when URL changes

    return {
        data,
        error,
        pending
    };
}

export default useFetch;
