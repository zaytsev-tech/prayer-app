import { FC } from 'react';
import { View } from 'react-native';

import { selectToken } from '../../store/ducks/auth';
import { Column } from '../../store/ducks/columns';
import { Prayer } from '../../store/ducks/prayers';
import { PrayerItem } from '../prayer-item';

interface MyPrayersProp {
  column: Column;
  prayers?: Record<string, Prayer> | Prayer;
}

export const Subscribed: FC<MyPrayersProp> = ({ column, prayers }) => {
  return (
    <View>
      {Object.values(prayers || {}).map((prayer) => {
        if (prayer.columnId == column.id) {
          return <PrayerItem key={prayer.id} prayer={prayer} token={selectToken()} />;
        }
      })}
    </View>
  );
};
