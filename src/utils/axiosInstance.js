// 토큰 만료를 감지하고, 만료 시 자동으로 로그아웃
import axios from 'axios';
import { store } from '../redux/store';
import { logout } from '../redux/authSlice';

const axiosInstance = axios.create({});

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
