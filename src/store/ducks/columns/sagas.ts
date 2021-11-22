import { call, put, takeLatest } from '@redux-saga/core/effects';

import { getColumns } from '../../../api/column';
import { setError, setLoading } from '../../ducks/auth/slice';
import { ColumnActions } from './actions';
import { setColumns } from './slice';

function* getColumnsSaga(value) {
  try {
    yield put(setLoading(true));
    const response = yield call(getColumns, value.payload);
    console.log('response column data: ', response.data);
    yield put(setColumns(response.data));
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

export function* watcherColumns() {
  yield takeLatest(ColumnActions.columnRequest, getColumnsSaga);
}
