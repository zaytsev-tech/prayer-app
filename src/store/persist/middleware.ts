import createSagaMiddleware from '@redux-saga/core';
import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';

import { userReducer } from '../ducks/auth';
import { watcherUser } from '../ducks/auth/sagas';
import { columnReducer, watcherColumns } from '../ducks/columns';

export function* rootSaga() {
  yield all([watcherUser(), watcherColumns()]);
}

export const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  auth: userReducer.reducer,
  columns: columnReducer.reducer,
});
