import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../auth';
import { userReducer } from '../auth/slice';
import createSagaMiddleware from '@redux-saga/core';
import { watcherUser } from '../auth/sagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'userStorage',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: userReducer.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const persistProvider = () => {
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  const persistor = persistStore(store);
  sagaMiddleware.run(watcherUser);
  return { store, persistor };
};

export interface ConfigState {
  user: User;
}
