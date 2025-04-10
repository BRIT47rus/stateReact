import { useQuery, useQueryClient, QueryKey } from '@tanstack/react-query';
import { queryFunction } from '../api/queruFunction';
import { useCallback } from 'react';

type UseRequeredRProps = {
    queryKey: QueryKey; // Теперь явно указываем тип QueryKey (string | readonly unknown[])
};

export const useRequeredR = ({ queryKey }: UseRequeredRProps) => {
    const { data, error, isLoading } = useQuery({
        queryKey: queryKey, // Передаем строку напрямую
        queryFn: queryFunction,
    });
    const queryClient = useQueryClient();

    const invalidate = useCallback(() => {
        queryClient.invalidateQueries(queryKey);
    }, [queryKey, queryClient]);

    return { data, error, isLoading, invalidate };
};
