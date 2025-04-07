import { useState } from 'react';

type TodoProps = {
    title: string;
};
export const TodoItem = ({ title }: TodoProps) => {
    const [completedTodo, setCompleted] = useState(false);
    const toogleCompleted = () => {
        setCompleted((prev) => !prev);
    };

    return (
        <div
            style={{
                padding: '4px 8px',
                border: '1px dashed gray',
                margin: 4,
                fontSize: 20,
            }}
            onClick={toogleCompleted}
        >
            <span
                style={{
                    marginRight: 8,
                    borderRight: '1px dashed gray',
                    padding: 8,
                }}
            >
                {title}
            </span>
            {completedTodo ? (
                <span style={{ color: 'green' }}>completed</span>
            ) : (
                <span style={{ color: 'red' }}>not completed</span>
            )}
        </div>
    );
};
