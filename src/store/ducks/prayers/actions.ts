import { createAction } from '@reduxjs/toolkit';

import { DeletePrayer, Prayer } from './types';

export enum PrayerActions {
  prayerRequest = 'PRAYER/GET',
  setPrayerRequest = 'PRAYER/POST',
  deletePrayerRequest = 'PRAYER/DELETE',
}

export const prayerRequest = createAction<string>(PrayerActions.prayerRequest);
export const setPrayerRequest = createAction<Prayer>(PrayerActions.setPrayerRequest);
export const deletePrayerRequest = createAction<DeletePrayer>(
  PrayerActions.deletePrayerRequest,
);
