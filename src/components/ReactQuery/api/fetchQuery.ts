import axios from 'axios';

const axiosInit = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

// Типизируйте queryKey как массив строк и укажите тип возвращаемого значения Promise.
export const queryFunction = async ({ queryKey }) => {
    const { data } = await axiosInit.get(queryKey[0]);
    return data;
};
