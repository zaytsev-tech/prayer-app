import { FC } from 'react';
import { Text, View } from 'react-native';

import { Column } from '../../store/ducks/columns';
import { InputPrayer } from '../../ui/input-prayer';

interface MyPrayersProp {
  column: Column;
}

export const MyPrayers: FC<MyPrayersProp> = ({ column }) => {
  console.log('My prayers: ', column);
  const onSubmit = () => {
    alert('1');
  };
  return (
    <View>
      <InputPrayer onSubmit={onSubmit} />
      <Text>{column.title}</Text>
    </View>
  );
};
