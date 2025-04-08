import './TopPanel.css';

export const TopPanel = () => {
    return (
        <div className="topPanel">
            <div className="topPanel__avatar-wrapper">
                <div className="topPanel__avatar" />
                avatar
            </div>

            <div className="topPanel__info">
                <div className="topPanel__info_user-name">nameinfo</div>
                <div className="topPanel__info_user">information</div>
            </div>
        </div>
    );
};
