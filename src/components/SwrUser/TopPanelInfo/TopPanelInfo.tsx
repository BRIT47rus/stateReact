import { useUser } from '../contexts/hooks/useUser';

export const TopPanelInfo = () => {
    const { data, error, isLoading } = useUser();

    if (isLoading) {
        return <h2>Идет загрузка профиля ...</h2>;
    }
    if (error) {
        console.log(error);
        return <h2>Произошла ошибка!</h2>;
    }

    const { name, email, address, website } = data;
    const avatar = name.split(' ').map((w: string) => w.charAt(0));
    return (
        <>
            <div className="topPanel__avatar-wrapper">{avatar}</div>
            <div className="topPanel__info">
                <div className="topPanel__info_user-name">{name}</div>
                <div className="topPanel__info_user">
                    <p>
                        <strong>Email:</strong> {email}
                    </p>
                    <p>
                        <strong>Addres:</strong> {address.city}
                    </p>
                    <p>
                        <strong>website: </strong>
                        {`https://${website}`}
                    </p>
                </div>
            </div>
        </>
    );
};
