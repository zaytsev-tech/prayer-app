import { put, call, takeLatest } from 'redux-saga/effects';
import { setError, setLogin } from './slice';
import { postUserLogin, postUserReg } from '../../api/user';
import { Actions } from './actions';

function* loginUser(values) {
  try {
    const response = yield call(postUserLogin, values.payload);
    yield put(setLogin(response.data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(setError(e.message));
    } else {
      console.log('Error: ', e);
      yield put(setError('unknown message'));
    }
  }
}

function* createUser(values) {
  try {
    const response = yield call(postUserReg, values.payload);
    alert(`User "${response.data.name}" was created!`);
  } catch (e) {
    if (e instanceof Error) {
      yield put(setError(e.message));
    } else {
      console.log('Error: ', e);
      yield put(setError('unknown message'));
    }
  }
}

export function* watcherUser() {
  yield takeLatest(Actions.loginRequest, loginUser);
  yield takeLatest(Actions.regRequest, createUser);
}

// export function* rootSaga() {
//   yield all([setTokenAsync()]);
// }
