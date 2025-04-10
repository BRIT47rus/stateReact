import { useQuery } from '@tanstack/react-query';

const queryFunTime = (): Promise<Date> =>
    new Promise((resolve) => {
        resolve(new Date());
    });
const OPTIONS = {
    refreshInterval: 1000,
};
export const useTime = () => {
    const { data } = useQuery('time', queryFunTime, OPTIONS);
    return data;
};
