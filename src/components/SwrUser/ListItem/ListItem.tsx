import { useState } from 'react';
import './ListItem.css';
import { useTodos } from '../contexts/hooks/useTodos';

// {
//     "userId": 2,
//     "id": 21,
//     "title": "suscipit repellat esse quibusdam voluptatem incidunt",
//     "completed": false
//   },
type ListItemProps = {
    id: number;
    title: string;
    completed: boolean;
};
export const ListItem = ({ id, title, completed }: ListItemProps) => {
    const [toogleCompleted, setToogleComleted] = useState(completed);

    const onChangeComplete = () => {
        setToogleComleted((prev) => !prev);
    };

    const completedStyle = toogleCompleted ? 'complete' : 'green';
    return (
        <div className="listItem-container" onClick={onChangeComplete}>
            <div className="listItem__name">{id}</div>
            <div className="listItem__options">
                <span className={completedStyle}>
                    <strong>{title}</strong>
                </span>
            </div>
        </div>
    );
};
