import { createContext, ReactNode, useContext, useState } from 'react';
const USER_ID = 2;
interface AppContextProps {
    userId: number;
    setUserID: (id: number) => void;
}
const AppContext = createContext<AppContextProps | undefined>(undefined);

export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [userId, setUserID] = useState(USER_ID);

    const value: AppContextProps = {
        userId,
        setUserID,
    };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
