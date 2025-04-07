import { useEffect, useState } from 'react';
import { queryGetData } from '../api/queryGetData';

export const useRequest = (query: number | string) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    useEffect(() => {
        queryGetData(query)
            .then((response) => {
                setData(response);
            })
            .catch((e) => {
                setError(e);
            });
    }, [query]);

    return {
        isLoading: !data && !error,
        data: data,
        error,
    };
};
