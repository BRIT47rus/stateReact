import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserRProviderContext } from '../contexUser/AppContextUserR';
import { ListsR } from '../ListsR/ListsR';
import { TopPanelR } from '../TopPanelR/TopPanel';
import './index.css';

const queryClient = new QueryClient();
export const UsersR = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="userR-container">
                <UserRProviderContext>
                    <TopPanelR />
                    <ListsR />
                </UserRProviderContext>
            </div>
        </QueryClientProvider>
    );
};
