import { useUserRContext } from '../contexUser/AppContextUserR';
import { useRequeredR } from './useRequeredR';
export type Data = {
    id: number;
    title: string;
    completed: boolean;
};
export const useTodosR = (): {
    data: Data[];
    isLoading: boolean;
} => {
    const { userId } = useUserRContext();
    const { data, isLoading } = useRequeredR({
        queryKey: [`todos?userId=${userId}`],
    });
    return { data, isLoading };
};
