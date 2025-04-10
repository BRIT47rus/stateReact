import { useState } from 'react';
import { Data } from '../../hooks/useTodosR';
import './ListItemR.css';

export const ListItemR = ({ completed, id, title }: Data) => {
    const [completedTodo, setCompletedTodo] = useState(completed);

    const handleToogleCompleted = () => {
        setCompletedTodo((prev) => !prev);
    };
    return (
        <div
            className="list-itemR"
            onClick={handleToogleCompleted}
            style={{
                background: completedTodo ? 'green' : '',
                color: completedTodo ? 'white' : 'black',
                transition: 'all 0.3s ease',
            }}
        >
            <span>{id}</span>
            <span>{title}</span>
            <span>{completedTodo ? 'выполнено' : 'невыполнено'}</span>
        </div>
    );
};
