import axios from 'axios';
import { GetEnvVariables } from '../helpers/get.env.variables';

const { VITE_API_URL } = GetEnvVariables();

export const Api_service = axios.create({

    baseURL: VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },

})

// Interceptor de solicitudes
Api_service.interceptors.request.use(

    config => {

        const token = localStorage.getItem('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }

);

Api_service.interceptors.response.use(

    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            console.log('Expired token, ');
            localStorage.removeItem('token');
        }
        return Promise.reject(error);
    }

);


