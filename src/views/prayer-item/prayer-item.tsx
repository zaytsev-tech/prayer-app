import { FC } from 'react';
import { Text, View } from 'react-native';

import { Prayer } from '../../store/ducks/prayers';

interface PrayerItemProp {
  prayer: Prayer;
}

export const PrayerItem: FC<PrayerItemProp> = ({ prayer }) => {
  return (
    <View>
      <Text>{prayer.title}</Text>
    </View>
  );
};
