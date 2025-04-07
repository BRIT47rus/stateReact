import { createContext, ReactNode, useContext } from 'react';
import { useTodoRequest } from './hook/useTodoRequest';

interface TodoData {
    [key: string]: any;
}

type TodoProviderProps = {
    userID: number;
    children: ReactNode;
};

const TodoContext = createContext<TodoData | undefined>(undefined); //  Context должен быть *объявлен* здесь

export const useTodoCTX = () => {
    const user = useContext(TodoContext);
    if (!user) {
        throw new Error('Не тот контекст');
    }
    return user;
};

export const TodoContexProvider = ({ userID, children }: TodoProviderProps) => {
    const user = useTodoRequest(userID);
    return <TodoContext.Provider value={user}>{children}</TodoContext.Provider>;
};
