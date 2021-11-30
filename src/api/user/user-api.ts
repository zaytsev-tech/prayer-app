import { Login, Registration } from '../../store/ducks/auth';
import { apiAuth } from '../base-axios';

export const postUserReg = (values: Registration) => {
  return apiAuth.post('/auth/sign-up', values).then((response) => response);
};

export const postUserLogin = (values: Login) => {
  return apiAuth.post('/auth/sign-in', values).then((response) => response);
};
