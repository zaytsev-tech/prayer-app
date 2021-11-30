import { createAction } from '@reduxjs/toolkit';

import { FormUpdatePrayer, Prayer } from './types';

export enum PrayerActions {
  prayerRequest = 'PRAYER/GET',
  setPrayerRequest = 'PRAYER/POST',
  updatePrayerRequest = 'PRAYER/UPDATE',
  deletePrayerRequest = 'PRAYER/DELETE',
}

export const prayerRequest = createAction(PrayerActions.prayerRequest);
export const setPrayerRequest = createAction<Prayer>(PrayerActions.setPrayerRequest);
export const updatePrayerRequest = createAction<FormUpdatePrayer>(
  PrayerActions.updatePrayerRequest,
);
export const deletePrayerRequest = createAction<number>(
  PrayerActions.deletePrayerRequest,
);
