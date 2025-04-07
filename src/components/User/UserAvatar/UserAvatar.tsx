import { useUserCTX } from '../context/UserContex';

export const UserAvatar = () => {
    const { data, isLoading, error } = useUserCTX();
    if (isLoading) {
        return <h2>Загрузка Профиля ... </h2>;
    }
    if (error) {
        return <h2> {error}</h2>;
    }
    const { name } = data;
    const initials = name.split(' ').map((w: string) => w.charAt(0));
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    background: 'green',
                    border: '2px solid gray',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h2>{initials}</h2>
            </div>
            <h3>{name}</h3>
        </div>
    );
};
