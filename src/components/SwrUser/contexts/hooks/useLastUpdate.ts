import useSWR from 'swr';

const fetchLastUpdate = (): Promise<Date> =>
    new Promise((resolve) => {
        resolve(new Date());
    });

const SW_CONFIG = {
    refreshInterval: 1000,
};

export const useLastUpdate = () => {
    const { data, error } = useSWR<Date, Error>(
        'lastUpdate',
        fetchLastUpdate,
        SW_CONFIG
    );
    return {
        data,
        error,
    };
};
