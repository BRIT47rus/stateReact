import { useEffect, useState } from 'react';
import { useLastUpdate } from '../contexts/hooks/useLastUpdate';
import { useTodos } from '../contexts/hooks/useTodos';

export const TopPanelStats = () => {
    const { data: dataTodos, mutate } = useTodos();
    const [selectedTodos, setSelectedTodos] = useState<number>(0);

    useEffect(() => {
        if (dataTodos) {
            setSelectedTodos(dataTodos.filter((t) => t.completed).length);
        }
    }, [dataTodos]);

    const { data: lastUpdateData } = useLastUpdate();

    const lastUpdate = lastUpdateData
        ? lastUpdateData.toLocaleTimeString()
        : '--';

    return (
        <div className="topPanel__stats">
            <div className="topPanel__stats-todo">
                Всего завершенных задач : <span>{selectedTodos}</span>
            </div>
            <div className="topPanel__stats-update">
                Время :<span>{lastUpdate}</span>
            </div>
        </div>
    );
};
