import { useUserR } from '../hooks/useUserR';
import './TopPanelR.css';
import { Avatar } from './ui/AvatarR';
import { InfoItem } from './ui/InfoItem';
import { StatsR } from './ui/Stats';
export const TopPanelR = () => {
    const { data, isLoading } = useUserR();
    if (isLoading) {
        return <h4>Закгрузка информации профиля</h4>;
    }
    const { address, id, email, name, phone, website } = data;
    // console.log(address.city);

    return (
        <div className="top-panelR">
            <Avatar userName={name} />
            <InfoItem
                address={address}
                id={id}
                email={email}
                phone={phone}
                website={website}
            />
            <StatsR />
        </div>
    );
};
