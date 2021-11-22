import { createSlice } from '@reduxjs/toolkit';

import { initialColumns } from '.';

export const columnReducer = createSlice({
  name: 'columns',
  initialState: initialColumns,
  reducers: {
    setColumns(state, action) {
      return action.payload.reduce((obj, curr) => {
        obj[curr.id] = curr;
        return obj;
      }, {});
    },
  },
});

export const { setColumns } = columnReducer.actions;
