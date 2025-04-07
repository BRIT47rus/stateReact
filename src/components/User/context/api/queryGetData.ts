import axios from 'axios';

const axiosInitialize = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const queryGetData = async (query) => {
    const { data } = await axiosInitialize.get(query);
    return data;
};
