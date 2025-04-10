import './AvatarR.css';
type AvatarProps = {
    userName: string;
};
export const Avatar = ({ userName }: AvatarProps) => {
    const intitials = userName.split(' ').map((w) => w.charAt(0));
    return (
        <div className="avatar-wrap">
            <div className="avatar-container">
                <span>{intitials}</span>
            </div>
            <span className="avatar_name">{userName}</span>
        </div>
    );
};
