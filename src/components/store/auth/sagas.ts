import { put, call, takeLatest } from 'redux-saga/effects';
import { setError, setLoading, setLogin } from './slice';
import { postUserLogin, postUserReg } from '../../api/user';
import { Actions } from './actions';

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
    //yield put(setLoading(true));
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
    //yield put(setLoading(false));
  }
}

export function* watcherUser() {
  yield takeLatest(Actions.loginRequest, loginUser);
  yield takeLatest(Actions.regRequest, createUser);
}
