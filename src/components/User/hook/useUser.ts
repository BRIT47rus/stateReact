import axios from 'axios';
import { useEffect, useState } from 'react';

export const useUser = (userID: number) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${userID}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((e) => {
                setError(e);
            });
    }, [userID]);

    return {
        isLoading: !data && !error,
        data: data,
        error,
    };
};
