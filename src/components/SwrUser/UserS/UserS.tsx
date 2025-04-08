import { SWRConfig } from 'swr';
import { AppContextProvider } from '../contexts/AppContext';
import { ListTodos } from '../ListsTodos/ListTodos';
import { TopPanel } from '../TopPanel/TopPanel';
import './UserS.css';
import { fetcher } from '../contexts/api/fetcher';

const SWR_CONFIG = {
    fetcher,
};

export const UserS = () => {
    return (
        <AppContextProvider>
            <SWRConfig value={SWR_CONFIG}>
                <div className="users-wrap">
                    <TopPanel />
                    <ListTodos />
                </div>
            </SWRConfig>
        </AppContextProvider>
    );
};
