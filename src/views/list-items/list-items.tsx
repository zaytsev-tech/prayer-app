import { FC, useState } from 'react';

import { Prayer } from '../../store/ducks/prayers';
import { PrayerItem } from '../prayer-item';
import { ButtonShowStrike } from '../strike-button-item';

interface ListItemsProps {
  id: number;
  prayers?: Record<string, Prayer> | Prayer;
}

export const ListItems: FC<ListItemsProps> = ({ id, prayers }): any => {
  const [showStrike, setShowStrike] = useState(true);
  const notCheckedPrayers = Object.values(prayers || {})
    .filter((prayer) => {
      if (prayer.columnId === id && !prayer.checked) {
        return prayer;
      }
    })
    .map((prayer) => <PrayerItem key={prayer.id} prayer={prayer} />)
    .concat(
      Object.values(prayers || {}).find((prayer) => {
        return prayer.columnId === id && prayer.checked;
      }) !== undefined
        ? [
            <ButtonShowStrike
              key="show-strike-button"
              bool={showStrike}
              onPress={() => {
                setShowStrike(!showStrike);
              }}
            />,
          ]
        : [],
    );
  if (showStrike) {
    return notCheckedPrayers.concat(
      Object.values(prayers || {})
        .filter((prayer) => {
          if (prayer.columnId === id && prayer.checked) {
            return prayer;
          }
        })
        .map((prayer) => <PrayerItem key={prayer.id} prayer={prayer} />),
    );
  } else {
    return notCheckedPrayers;
  }
};
