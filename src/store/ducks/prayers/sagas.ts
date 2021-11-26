import { call, put, takeLatest } from '@redux-saga/core/effects';

import {
  deletePrayerAPI,
  getPrayersAPI,
  postPrayerAPI,
} from '../../../api/prayer/prayer-api';
import { setError, setLoading } from '../../ducks/auth/slice';
import { PrayerActions } from './actions';
import { addPrayer, deletePrayer, setPrayers } from './slice';

function* getPrayersSaga(value) {
  try {
    yield put(setLoading(true));
    const response = yield call(getPrayersAPI, value.payload);
    yield put(setPrayers(response.data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(setError(e.message));
    } else {
      console.log('Error: ', e);
      yield put(setError('unknown message'));
    }
  } finally {
    yield put(setLoading(false));
  }
}

function* setPrayerSaga(value) {
  try {
    yield put(setLoading(true));
    const response = yield call(postPrayerAPI, value.payload);
    yield put(addPrayer(response.data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(setError(e.message));
    } else {
      console.log('Error: ', e);
      yield put(setError('unknown message'));
    }
  } finally {
    yield put(setLoading(false));
  }
}

function* deletePrayerSaga(value) {
  try {
    yield put(setLoading(true));
    yield call(deletePrayerAPI, value.payload);
    yield put(deletePrayer(value.payload.prayerId));
  } catch (e) {
    if (e instanceof Error) {
      yield put(setError(e.message));
    } else {
      console.log('Error: ', e);
      yield put(setError('unknown message'));
    }
  } finally {
    yield put(setLoading(false));
  }
}

export function* watcherPrayers() {
  yield takeLatest(PrayerActions.prayerRequest, getPrayersSaga);
  yield takeLatest(PrayerActions.setPrayerRequest, setPrayerSaga);
  yield takeLatest(PrayerActions.deletePrayerRequest, deletePrayerSaga);
}
