import { useRequest } from './useRequest';

export const useTodoRequest = (userID: string | number) => {
    return useRequest(`todos?userId=${userID}`);
};
