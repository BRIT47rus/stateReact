import { UserData } from '../../hooks/useUserR';
import './InfoItem.css';
type UserInfoProps = Omit<UserData, 'name'>;
export const InfoItem = ({
    address,
    email,
    id,
    phone,
    website,
}: UserInfoProps) => {
    return (
        <div className="info-item-container">
            <div>
                Name:<span className="accent-info">{id}</span>
            </div>
            <div>
                City: <span className="accent-info">{address.city}</span>
            </div>
            <div>
                Email: <span className="accent-info">{email}</span>
            </div>
            <div>
                Phone: <span className="accent-info">{phone}</span>
            </div>
            <div>
                Website:{' '}
                <span className="accent-info">{`https://${website}`}</span>
            </div>
        </div>
    );
};
