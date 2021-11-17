import { put, call, takeLatest } from 'redux-saga/effects';
import { getUser } from '../../api/user';
import { loginFailure, loginRequest, loginSuccess } from './actions';

function* getUserSaga(values) {
  try {
    console.log('values: ', JSON.parse(values));
    const response = yield call(getUser, values.payload);
    console.log('user: ', response.data);
    yield put(loginSuccess(response));
  } catch (e) {
    yield put(loginFailure());
  }
}

export function* watcherUser() {
  yield takeLatest('USER/LOGIN/REQUEST', getUserSaga);
}

// export function* rootSaga() {
//   yield all([setTokenAsync()]);
// }
