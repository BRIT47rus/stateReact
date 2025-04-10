import axios from 'axios';
import { QueryFunctionContext } from '@tanstack/react-query';

const axiosInitialize = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const queryFunction = async ({ queryKey }: QueryFunctionContext) => {
    const url = queryKey[0]; // Получаем URL из первого элемента массива
    const { data } = await axiosInitialize.get(url);
    return data;
};
