import { createContext, ReactNode, useContext, useState } from 'react';
type UserRProviderProps = {
    children: ReactNode;
};
type ValueProvider = {
    userId: number;
    setUserId: React.Dispatch<React.SetStateAction<number>>;
};

const INITIAL_USER_ID = 2;
const UserRContext = createContext<ValueProvider | undefined>(undefined);
export const useUserRContext = () => {
    const context = useContext(UserRContext);
    if (!context) {
        throw new Error('Это не ваш контекст!');
    }
    return context;
};
export const UserRProviderContext = ({ children }: UserRProviderProps) => {
    const [userId, setUserId] = useState(INITIAL_USER_ID);
    const value: ValueProvider = {
        userId,
        setUserId,
    };

    return (
        <UserRContext.Provider value={value}>{children}</UserRContext.Provider>
    );
};
