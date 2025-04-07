import { useUserCTX } from '../context/UserContex';

export const UserInfo = () => {
    const { isLoading, data, error } = useUserCTX();
    if (isLoading) {
        return <h2>Загрузка информации ... </h2>;
    }

    if (error) {
        return (
            <h2
                style={{
                    color: 'red',
                }}
            >
                Возникла ошибка!
            </h2>
        );
    }
    const { email, address, website } = data;

    return (
        <div
            style={{
                border: '2px solid gray',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'start',
                flexDirection: 'column',
                padding: '20px 40px',
                fontWeight: 'bold',
                marginTop: 40,
            }}
        >
            <div>email : {email}</div>
            <br />
            <div>
                address : {address.street} ,{address.city}
            </div>
            <br />
            <div>website : {`https://${website}`}</div>
            <br />
        </div>
    );
};
