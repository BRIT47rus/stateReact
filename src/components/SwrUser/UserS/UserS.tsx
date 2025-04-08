import { ListTodos } from '../ListsTodos/ListTodos';
import { TopPanel } from '../TopPanel/TopPanel';
import './UserS.css';
export const UserS = () => {
    return (
        <div className="users-wrap">
            <TopPanel />
            <ListTodos />
        </div>
    );
};
