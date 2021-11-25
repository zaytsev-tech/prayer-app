import { createSlice } from '@reduxjs/toolkit';

import { initialPrayers } from './state';

export const columnReducer = createSlice({
  name: 'columns',
  initialState: initialPrayers,
  reducers: {
    setColumns(state, action) {
      return action.payload.reduce((obj, curr) => {
        obj[curr.id] = curr;
        return obj;
      }, {});
    },
    addColumn(state, action) {
      return { ...state, [action.payload.id]: action.payload };
    },
  },
});

export const { setColumns, addColumn } = columnReducer.actions;
