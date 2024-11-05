import axios from "axios";

// Axios Interceptor Instance
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        const accessToken = JSON.parse(token);
        
        // If token is present, add it to request's Authorization Header
        if (accessToken) {
            if (config.headers) config.headers.token = accessToken;
        }
        return config;
    },
    (error) => {
        // Handle request errors here
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        // Can be modified response
        return response;
    },
    (error) => {
        // Handle response errors here
        return Promise.reject(error);
    }
);

export default api;