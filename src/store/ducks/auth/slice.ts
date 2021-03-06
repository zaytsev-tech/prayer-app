import { createSlice } from '@reduxjs/toolkit';

import { initialUser } from './default-values/state';

export const userReducer = createSlice({
  name: 'user',
  initialState: initialUser,
  reducers: {
    setLogin(state, action) {
      return { ...state, auth: true, user: action.payload };
    },
    setLoading(state, action) {
      return { ...state, loading: action.payload };
    },
    setError(state, action) {
      return (state.error = action.payload);
    },
  },
});

export const { setLogin, setError, setLoading } = userReducer.actions;
