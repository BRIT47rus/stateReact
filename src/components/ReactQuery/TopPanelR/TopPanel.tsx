import './TopPanelR.css';
import { Avatar } from './ui/AvatarR';
import { InfoItem } from './ui/InfoItem';
import { StatsR } from './ui/Stats';
export const TopPanelR = () => {
    return (
        <div className="top-panelR">
            <Avatar />
            <InfoItem />
            <StatsR />
        </div>
    );
};
