import { createSelector } from 'reselect';

import { UserState } from './types';

interface UserProps {
  auth: UserState;
}

const selectProfile = (store) => store.getState().auth;

export const selectToken = createSelector(selectProfile, (auth) => {
  return auth.user.token;
});
