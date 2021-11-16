import { ActionTypes, Login, UserAction } from './action-types';

export const setToken = (payload: Login): UserAction => ({
  type: ActionTypes.login,
  payload,
});
