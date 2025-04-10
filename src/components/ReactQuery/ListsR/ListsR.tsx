import { useTodosR } from '../hooks/useTodosR';
import { ListItemR } from './ui/ListItemR';

export const ListsR = () => {
    const { data: todos, isLoading } = useTodosR();
    console.log(todos);
    if (isLoading) {
        return <h3>Загрузка задач ...</h3>;
    }
    return (
        <div className="listsR-container">
            <h3>Список задач</h3>

            {todos.map((todo) => (
                <ListItemR key={todo.id} {...todo} />
            ))}
        </div>
    );
};
