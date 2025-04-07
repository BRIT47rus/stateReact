import { createContext, ReactNode, useContext } from 'react';
import { useUser } from './hook/useUser';

interface UserData {
    [key: string]: any;
}

type UserProviderProps = {
    userID: number;
    children: ReactNode;
};

const UserContextMain = createContext<UserData | undefined>(undefined); //  Context должен быть *объявлен* здесь

export const useUserCTX = () => {
    const user = useContext(UserContextMain);
    if (!user) {
        throw new Error('Не тот контекст');
    }
    return user;
};

export const UserContexProvider = ({ userID, children }: UserProviderProps) => {
    const user = useUser(userID);
    return (
        <UserContextMain.Provider value={user}>
            {children}
        </UserContextMain.Provider>
    );
};
