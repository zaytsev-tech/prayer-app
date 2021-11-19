import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from '@redux-saga/core';
import { all } from '@redux-saga/core/effects';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import { User, userReducer } from '../auth';
import { watcherUser } from '../auth/sagas';
import { columnReducer, MainColumn, watcherColumns } from '../columns';

function* rootSaga() {
  yield all([watcherUser(), watcherColumns()]);
}

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'userStorage',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: userReducer.reducer,
  columns: columnReducer.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const persistProvider = () => {
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};

export interface ConfigState {
  user: User;
  columns: MainColumn;
}
