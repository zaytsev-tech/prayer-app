import createSagaMiddleware from '@redux-saga/core';
import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';

import { userReducer, watcherUser } from '../ducks/auth';
import { columnReducer, watcherColumns } from '../ducks/columns';
import { commentReducer, watcherComments } from '../ducks/comments';
import { prayerReducer, watcherPrayers } from '../ducks/prayers';

export function* rootSaga() {
  yield all([watcherUser(), watcherColumns(), watcherPrayers(), watcherComments()]);
}

export const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  auth: userReducer.reducer,
  columns: columnReducer.reducer,
  prayers: prayerReducer.reducer,
  comments: commentReducer.reducer,
});
