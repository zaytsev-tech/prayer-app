import { createSlice } from '@reduxjs/toolkit';

import { initialPrayer } from './state';

export const prayerReducer = createSlice({
  name: 'columns',
  initialState: initialPrayer,
  reducers: {
    setPrayers(state, action) {
      return action.payload.reduce((obj, curr) => {
        obj[curr.id] = curr;
        return obj;
      }, {});
    },
    addPrayer(state, action) {
      return { ...state, [action.payload.id]: action.payload };
    },
    deletePrayer(state, action) {
      delete state[action.payload];
    },
  },
});

export const { setPrayers, addPrayer, deletePrayer } = prayerReducer.actions;
