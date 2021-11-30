import { call, put, takeLatest } from '@redux-saga/core/effects';

import {
  deletePrayerAPI,
  getPrayersAPI,
  postPrayerAPI,
  updatePrayerAPI,
} from '../../../api/prayer/prayer-api';
import { setError, setLoading } from '../../ducks/auth/slice';
import { PrayerActions } from './actions';
import { addPrayer, deletePrayer, setPrayers, updatePrayer } from './slice';

function* getPrayersSaga() {
  try {
    yield put(setLoading(true));
    const response = yield call(getPrayersAPI);
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

function* updatePrayerSaga(value) {
  try {
    yield put(setLoading(true));
    const response = yield call(updatePrayerAPI, value.payload);
    yield put(updatePrayer(response.data));
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
    const response = yield call(getPrayersAPI);
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

export function* watcherPrayers() {
  yield takeLatest(PrayerActions.prayerRequest, getPrayersSaga);
  yield takeLatest(PrayerActions.setPrayerRequest, setPrayerSaga);
  yield takeLatest(PrayerActions.updatePrayerRequest, updatePrayerSaga);
  yield takeLatest(PrayerActions.deletePrayerRequest, deletePrayerSaga);
}
