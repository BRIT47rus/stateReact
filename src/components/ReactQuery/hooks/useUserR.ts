import { useUserRContext } from '../contexUser/AppContextUserR';
import { useRequeredR } from './useRequeredR';
const user_MOCK = {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: {
            lat: '-43.9509',
            lng: '-34.4618',
        },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains',
    },
};
export type UserData = {
    id: number;
    name: string;
    email: string;
    address: { city: string };
    phone: string;
    website: string;
};

type UserReturned = {
    data: UserData;
    isLoading: boolean;
    error: Error | null;
};
export const useUserR = (): UserReturned => {
    const { userId } = useUserRContext();
    const { data, isLoading, error } = useRequeredR({
        queryKey: [`users/${userId}`],
    });
    return { data, error, isLoading };
};
