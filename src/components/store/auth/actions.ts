import { createAction } from '@reduxjs/toolkit';
import { User, Login } from './types';

export const loginRequest = createAction<Login>('USER/LOGIN/REQUEST');
export const loginSuccess = createAction<User>('USER/LOGIN/SUCCESS');
export const loginFailure = createAction('USER/LOGIN/FAILURE');
