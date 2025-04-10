import { useTime } from '../../hooks/useTime';
import { useTodosR } from '../../hooks/useTodosR';
import './Stats.css';

export const StatsR = () => {
    const { data, isLoading } = useTime();
    const { data: todos } = useTodosR();

    if (isLoading) {
        return <span>Загрузка</span>;
    }

    const dateNow = data ? data.toLocaleDateString() : '--';
    const timeNow = data ? new Date().toLocaleTimeString() : '--';
    const completedTodo = todos.filter((todo) => todo.completed === true);

    return (
        <div className="statsR-container">
            <div>
                Выполнено задач:{' '}
                <span className="accent-info">{completedTodo.length}</span>
            </div>
            <div>
                Сегодня: <span className="accent-info">{dateNow}</span>
            </div>
            <div>
                Время: <span className="accent-info">{timeNow}</span>
            </div>
        </div>
    );
};
