import { useRequest } from './useRequest';

export const useUser = (userID: string | number) => {
    return useRequest(`users/${userID}`);
};
