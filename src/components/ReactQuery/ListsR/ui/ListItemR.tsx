import { Data } from '../../hooks/useTodosR';
import './ListItemR.css';

export const ListItemR = ({ completed, id, title }: Data) => {
    return (
        <div className="list-itemR">
            <span>{id}</span>
            <span>{title}</span>
            <span>{completed ? 'выполнено' : 'невыполнено'}</span>
        </div>
    );
};
