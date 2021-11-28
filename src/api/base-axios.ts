import axios, { AxiosRequestConfig } from 'axios';

import { store } from '../components/store-provider';
import { selectToken } from '../store/ducks/auth';

const baseAxiosConfig: AxiosRequestConfig = {
  baseURL: 'https://prayer.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const apiAuth = axios.create(baseAxiosConfig);
export const apiPrayer = axios.create(baseAxiosConfig);

apiPrayer.interceptors.request.use(
  (config) => {
    const token = selectToken(store);
    if (token) {
      if (config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);
