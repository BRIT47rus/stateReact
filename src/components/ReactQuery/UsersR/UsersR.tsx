import { UserRProviderContext } from '../contexUser/AppContextUserR';
import { ListsR } from '../ListsR/ListsR';
import { TopPanelR } from '../TopPanelR/TopPanel';
import './index.css';
export const UsersR = () => {
    return (
        <div className="userR-container">
            <UserRProviderContext>
                <TopPanelR />
                <ListsR />
            </UserRProviderContext>
        </div>
    );
};
