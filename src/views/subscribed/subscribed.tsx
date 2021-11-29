import { FC } from 'react';
import { View } from 'react-native';

import { Column } from '../../store/ducks/columns';
import { Prayer } from '../../store/ducks/prayers';
import { ListItems } from '../list-items';

interface MyPrayersProp {
  column: Column;
  prayers?: Record<string, Prayer> | Prayer;
}

export const Subscribed: FC<MyPrayersProp> = ({ column, prayers }) => {
  return (
    <View>
      <ListItems id={column.id || 0} prayers={prayers} />
    </View>
  );
};
