import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';

interface AppContextProps {
    userId: number;
    setUserID: (id: number) => void;
}
const AppContext = createContext<AppContextProps | undefined>(undefined);

export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppContextProvider = ({
    children,
    indexUser,
}: {
    children: ReactNode;
    indexUser: number;
}) => {
    const [userId, setUserID] = useState(indexUser);
    useEffect(() => {
        if (userId) {
            setUserID(indexUser);
        }
    }, [userId]);

    const value: AppContextProps = {
        userId,
        setUserID,
    };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
