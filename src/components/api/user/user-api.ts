import axios from 'axios';
import { Login } from '../../store/auth';

export const getUser = (values: Login) => {
  return axios({
    method: 'POST',
    responseType: 'json',
    url: 'https://prayer.herokuapp.com/auth/sign-in',
    data: values,
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  });
};
