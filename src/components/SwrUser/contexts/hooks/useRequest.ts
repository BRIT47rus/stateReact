import useSWR from 'swr';

export const useRequest = (requestUrl: string) => {
    const { data, error, mutate } = useSWR(requestUrl);
    return {
        isLoading: !data && !error,
        data,
        mutate,
        error,
    };
};
