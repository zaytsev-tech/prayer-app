import React from 'react';
import { useSelector } from 'react-redux';
import { Authorization } from '../authorization';
import { MyDesk } from '../my-desk';
import { Main } from '../store/auth';

interface Profile {
  auth: Main;
}

export const Basic = () => {
  const profile = useSelector((state: Profile) => state.auth);
  return <>{profile.user.name !== '' ? <MyDesk /> : <Authorization />}</>;
};
