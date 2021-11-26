import { useSelector } from 'react-redux';

import { UserState } from './types';

interface UserProps {
  auth: UserState;
}

const profile = useSelector((state: UserProps) => state.auth);

export const selectToken = () => {
  return profile.user.token;
};
