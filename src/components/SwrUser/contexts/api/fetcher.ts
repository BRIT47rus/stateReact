import axios from 'axios';

const axiosInit = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const fetcher = async (query: string) => {
    const response = await axiosInit.get(query);
    return response.data;
};
