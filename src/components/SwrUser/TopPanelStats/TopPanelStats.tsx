import { useLastUpdate } from '../contexts/hooks/useLastUpdate';
import { useTodos } from '../contexts/hooks/useTodos';

export const TopPanelStats = () => {
    const { data: dataTodos } = useTodos();

    const { data: lastUpdateData } = useLastUpdate();
    const lastUpdate = lastUpdateData
        ? lastUpdateData.toLocaleTimeString()
        : '--';
    return (
        <div className="topPanel__stats">
            <div className="topPanel__stats-todo">
                Всего завершенных задач :{' '}
                <span>
                    {dataTodos
                        ? dataTodos.filter((t) => t.completed).length
                        : 1}
                </span>
            </div>
            <div className="topPanel__stats-update">
                Время :<span>{lastUpdate}</span>
            </div>
        </div>
    );
};
