import { ListItem } from '../ListItem/ListItem';
import { useTodos } from '../contexts/hooks/useTodos';
import './LIstTodos.css';

export const ListTodos = () => {
    const { data, error, isLoading } = useTodos();

    if (isLoading) {
        return <h2>Идет загрузка задач ...</h2>;
    }
    if (error) {
        console.log(error);

        return <h2>Произошла ошибка загрузки задач!</h2>;
    }

    return (
        <div className="lists-container">
            {data.map((todo) => (
                <ListItem {...todo} key={todo.id} />
            ))}
        </div>
    );
};
