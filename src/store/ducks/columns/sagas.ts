import { call, put, takeLatest } from '@redux-saga/core/effects';

import { getColumns, postColumn } from '../../../api/column';
import { setError, setLoading } from '../../ducks/auth/slice';
import { ColumnActions } from './actions';
import { addColumn, setColumns } from './slice';

function* getColumnsSaga(value) {
  try {
    yield put(setLoading(true));
    const response = yield call(getColumns, value.payload);
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

function* setColumnSaga(value) {
  try {
    yield put(setLoading(true));
    const response = yield call(postColumn, value.payload);
    console.log('ddata: ', response);
    yield put(addColumn(response.data));
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
  yield takeLatest(ColumnActions.setColumnRequest, setColumnSaga);
}
