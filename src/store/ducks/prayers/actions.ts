import { createAction } from '@reduxjs/toolkit';

import { Prayer } from './types';

export enum PrayerActions {
  prayerRequest = 'PRAYER/GET',
  setPrayerRequest = 'PRAYER/POST',
  deletePrayerRequest = 'PRAYER/DELETE',
}

export const prayerRequest = createAction(PrayerActions.prayerRequest);
export const setPrayerRequest = createAction<Prayer>(PrayerActions.setPrayerRequest);
export const deletePrayerRequest = createAction<number>(
  PrayerActions.deletePrayerRequest,
);
