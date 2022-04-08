import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const useAxios = (axiosParams: any) => {
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async (params: any) => {
        try {
            const result = await axios.request(params);
            setResponse(result.data);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(axiosParams);
    }, []);

    return { response, error, loading };
};