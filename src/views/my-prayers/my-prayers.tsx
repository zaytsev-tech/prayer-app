import { FC } from 'react';
import { Text, View } from 'react-native';

import { Column } from '../../store/ducks/columns';

interface MyPrayersProp {
  column: Column;
}

export const MyPrayers: FC<MyPrayersProp> = ({ column }) => {
  console.log('My prayers: ', column);
  return (
    <View>
      <Text>{column.title}</Text>
    </View>
  );
};
