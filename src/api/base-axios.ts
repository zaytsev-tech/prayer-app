import { configureStore } from '@reduxjs/toolkit';
import axios, { AxiosRequestConfig } from 'axios';

import { rootReducer } from '../store/storage/middleware';

const baseAxiosConfig: AxiosRequestConfig = {
  baseURL: 'https://prayer.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const apiAuth = axios.create(baseAxiosConfig);
export const apiPrayer = axios.create(baseAxiosConfig);

const store = configureStore({ reducer: rootReducer });

apiPrayer.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.user.token;
    if (token) {
      if (config.headers) {
        config.headers.Authorization = token;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);
