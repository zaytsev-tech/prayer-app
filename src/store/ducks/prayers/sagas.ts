import { call, put, takeLatest } from '@redux-saga/core/effects';

import { getPrayers } from '../../../api/prayer';
import { postPrayer } from '../../../api/prayer/prayer-api';
import { setError, setLoading } from '../../ducks/auth/slice';
import { PrayerActions } from './actions';
import { addPrayer, setPrayers } from './slice';

function* getPrayersSaga(value) {
  try {
    yield put(setLoading(true));
    const response = yield call(getPrayers, value.payload);
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
    const response = yield call(postPrayer, value.payload);
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

export function* watcherPrayers() {
  yield takeLatest(PrayerActions.prayerRequest, getPrayersSaga);
  yield takeLatest(PrayerActions.setPrayerRequest, setPrayerSaga);
}
