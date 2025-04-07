import { useState } from 'react';
import { UserContexProvider } from './context/UserContex';
import { UserAvatar } from './UserAvatar/UserAvatar';
import { UserInfo } from './UserInfo/UserInfo';
import { TodoContexProvider } from './context/TodoContext';
import { TodoList } from './TodoLIst/TodoListx';

export const User = () => {
    const [randomIdx, setRandomIDX] = useState<number>(1);
    console.log(randomIdx);

    return (
        <UserContexProvider userID={randomIdx}>
            <TodoContexProvider userID={randomIdx}>
                <UserAvatar />
                <UserInfo />

                <button
                    onClick={
                        () => setRandomIDX(() => Math.round(Math.random() * 10)) // 10 максимум
                    }
                    style={{ background: 'blue', padding: '8px 18px' }}
                >
                    Random user
                </button>

                <TodoList />
            </TodoContexProvider>
        </UserContexProvider>
    );
};
