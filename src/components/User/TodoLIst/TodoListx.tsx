import { useTodoCTX } from '../context/TodoContext';
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = () => {
    const { data, isLoading, error } = useTodoCTX();
    if (isLoading) {
        return <h2>Загрузка задач ...</h2>;
    }
    if (error) {
        return <h2>Ошибка задач ...</h2>;
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {data &&
                data.map((todo, idx) => (
                    <TodoItem key={idx} title={todo.title} />
                ))}
        </div>
    );
};
