import { useAppContext } from '../AppContext';
import { useRequest } from './useRequest';

export const useTodos = () => {
    const { userId } = useAppContext();
    return useRequest(`todos?userId=${userId}`);
};
