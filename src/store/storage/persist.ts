import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import { User } from '../ducks/auth';
import { MainColumn } from '../ducks/columns';
import { rootReducer, rootSaga, sagaMiddleware } from './middleware';

const persistConfig = {
  key: 'userStorage',
  storage: AsyncStorage,
};

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
