import { createReducer } from '@reduxjs/toolkit';
import { loginFailure, loginRequest, loginSuccess } from './actions';
import { initialUser } from './state';

export const userReducer = createReducer(initialUser, (builder) => {
  builder
    .addCase(loginRequest, (state, action) => {
      return { ...state, loading: true, error: null };
    })
    .addCase(loginSuccess, (state, action) => {
      return { ...state, loading: false, user: action.payload, error: null };
    })
    .addCase(loginFailure, (state, action) => {
      return { ...state, loading: false };
    });
});
