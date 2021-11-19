import { createAction } from '@reduxjs/toolkit';

import { Login, Registration } from './types';

export enum UserActions {
  loginRequest = 'USER/LOGIN',
  regRequest = 'USER/REGISTRATION',
}

export const loginRequest = createAction<Login>(UserActions.loginRequest);
export const regRequest = createAction<Registration>(UserActions.regRequest);
