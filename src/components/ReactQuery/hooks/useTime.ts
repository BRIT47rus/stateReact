import { useQuery } from '@tanstack/react-query';

const queryFunTime = (): Promise<Date> =>
    new Promise((resolve) => {
        resolve(new Date());
    });
const OPTIONS = {
    refreshInterval: 5000,
};
export const useTime = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['time'], // Ключ запроса теперь внутри объекта
        queryFn: queryFunTime, // Функция запроса внутри объекта
        ...OPTIONS, // Другие опции также внутри объекта (можно и напрямую)
    });
    return { data, isLoading };
};
