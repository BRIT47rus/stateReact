import { SWRConfig } from 'swr';
import { AppContextProvider } from '../contexts/AppContext';
import { ListTodos } from '../ListsTodos/ListTodos';
import { TopPanel } from '../TopPanel/TopPanel';
import './UserS.css';
import { fetcher } from '../contexts/api/fetcher';
import { useState } from 'react';

const SWR_CONFIG = {
    fetcher,
};
// const randomId = Math.floor(Math.random() * 10);
export const UserS = () => {
    const [indexID, setIndexID] = useState(1);
    const handleChangeIndex = () => {
        setIndexID(() => Math.floor(Math.random() * 10));
    };
    return (
        <AppContextProvider indexUser={indexID < 1 ? 1 : indexID}>
            <SWRConfig value={SWR_CONFIG}>
                <button className="users_btn" onClick={handleChangeIndex}>
                    Reload
                </button>
                <div className="users-wrap">
                    <TopPanel />
                    <ListTodos />
                </div>
            </SWRConfig>
        </AppContextProvider>
    );
};
