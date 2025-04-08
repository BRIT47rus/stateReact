import { TopPanelInfo } from '../TopPanelInfo/TopPanelInfo';
import { TopPanelStats } from '../TopPanelStats/TopPanelStats';
import './TopPanel.css';

export const TopPanel = () => {
    return (
        <div className="topPanel">
            <TopPanelInfo />
            <TopPanelStats />
        </div>
    );
};
