import { call, put, takeLatest } from 'redux-saga/effects';

import { postUserLogin, postUserReg } from '../../../api/user';
import { UserActions } from './actions';
import { setError, setLoading, setLogin } from './slice';

function* loginUser(values) {
  try {
    yield put(setLoading(true));
    const response = yield call(postUserLogin, values.payload);
    yield put(setLogin(response.data));
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

function* createUser(values) {
  try {
    yield put(setLoading(true));
    const response = yield call(postUserReg, values.payload);
    alert(`User "${response.data.name}" was created!`);
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

export function* watcherUser() {
  yield takeLatest(UserActions.loginRequest, loginUser);
  yield takeLatest(UserActions.regRequest, createUser);
}
