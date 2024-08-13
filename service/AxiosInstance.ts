import axios from 'axios';
import Cookies from 'js-cookie';
import { decrypt, encrypt } from '~/service/encryption';


// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com/'
  // Replace with your actual base URL
});

// Optional: Add an interceptor to include authorization token in requests
axiosInstance.interceptors.request.use((config) => {
    const user = decrypt(Cookies.get('token'));
    if (user) {
        config.headers.Authorization = `Bearer ${user}`;
    }
    return config;
});

// Interceptor for handling errors globally
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        const { status } = error.response;
        if (status === 401) {

        } else if (status === 500) {
            // Handle server errors
            console.error('Server Error');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
