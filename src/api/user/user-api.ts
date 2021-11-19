import axios from 'axios';

import { Login, Registration } from '../../store/auth';

export const postUserLogin = (values: Login) => {
  return axios({
    method: 'POST',
    responseType: 'json',
    url: 'https://prayer.herokuapp.com/auth/sign-in',
    data: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const postUserReg = (values: Registration) => {
  return axios({
    method: 'POST',
    responseType: 'json',
    url: 'https://prayer.herokuapp.com/auth/sign-up',
    data: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
