// 토큰 만료를 감지하고, 만료 시 자동으로 로그아웃
import axios from 'axios';
import { store } from '../store/store';
import { logout } from '../store/authSlice';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            store.dispatch(logout());
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
