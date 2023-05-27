import axios, { AxiosResponse, AxiosError } from 'axios';
import Cookies from 'js-cookie';

export const getAxiosConfig = (withToken: boolean) => {
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': '',
            'Access-Control-Allow-Origin': '*',
        },
    }
    if (withToken) {
        config.headers['x-access-token'] = Cookies.get('ACCESS_TOKEN') || '';
        return config;
    } else {
        return config;
    }
}

export const axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': '',
        'Access-Control-Allow-Origin': '*',
    },
};
export interface ErrorResponse {
    status: number;
    error: string;
    message: string;
}

export const UnAuthorizedError: ErrorResponse = {
    status: 401,
    message: 'Something went Wrong',
    error: '',
};

const AxiosInstance = axios.create({
    baseURL: 'https://devstage.turftown.in/api/',
    timeout: 10000,
});

// Add a request interceptor
AxiosInstance.interceptors.request.use(
    req => {

        // const token = Cookies.get('ACCESS_TOKEN');
        // if (token) {
        //     req.headers.Authorization = token;
        // }

        // Do something before request is sent
        return req;
    },
    error => {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
AxiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError): Promise<ErrorResponse> => {
        let responseError: ErrorResponse = {
            status: error?.response?.status || 500,
            message: error?.message || 'Something went wrong',
            error: error?.name || 'Api Error',
        };
        return Promise.reject(responseError);
    },
);

export default AxiosInstance;
