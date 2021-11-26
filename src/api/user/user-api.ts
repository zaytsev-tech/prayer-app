import { Login, Registration } from '../../store/ducks/auth';
import { apiAuth } from '../base-axios';

export const postUserReg = (values: Registration) => {
  return apiAuth.post('/auth/sign-up', values);
};

export const postUserLogin = (values: Login) => {
  return apiAuth.post('/auth/sign-in', values);
};
