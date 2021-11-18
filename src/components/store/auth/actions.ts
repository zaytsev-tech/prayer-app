import { createAction } from '@reduxjs/toolkit';
import { Login, Registration } from './types';

export enum Actions {
  loginRequest = 'USER/LOGIN',
  regRequest = 'USER/REGISTRATION',
}

export const loginRequest = createAction<Login>(Actions.loginRequest);
export const regRequest = createAction<Registration>(Actions.regRequest);
