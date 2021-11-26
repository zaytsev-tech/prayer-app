import { FC } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { UserState } from '../../store/ducks/auth';
import { Column } from '../../store/ducks/columns';
import { Prayer } from '../../store/ducks/prayers';
import { PrayerItem } from '../prayer-item';

interface MyPrayersProp {
  column: Column;
  prayers?: Record<string, Prayer> | Prayer;
}

interface UserSelectProp {
  auth: UserState;
}

export const Subscribed: FC<MyPrayersProp> = ({ column, prayers }) => {
  const profile = useSelector((state: UserSelectProp) => state.auth);
  return (
    <View>
      {Object.values(prayers || {}).map((prayer) => {
        if (prayer.columnId == column.id) {
          return (
            <PrayerItem key={prayer.id} prayer={prayer} token={profile.user.token} />
          );
        }
      })}
    </View>
  );
};
