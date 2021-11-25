import { createAction } from '@reduxjs/toolkit';

import { Prayer } from '.';

export enum PrayerActions {
  prayerRequest = 'PRAYER/GET',
  setPrayerRequest = 'PRAYER/POST',
}

export const prayerRequest = createAction<string>(PrayerActions.prayerRequest);
export const setPrayerRequest = createAction<Prayer>(PrayerActions.setPrayerRequest);
