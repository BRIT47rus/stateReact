import { useAppContext } from '../AppContext';
import { useRequest } from './useRequest';

export const useUser = () => {
    const { userId } = useAppContext();
    return useRequest(`users/${userId}`);
};
