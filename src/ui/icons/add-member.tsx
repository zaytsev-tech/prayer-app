import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './type';

export const IconAddMember: FC<IconProps> = ({ width, height, color }) => {
  return (
    <Svg width={width} height={height} fill={color} viewBox="0 0 48 48">
      <Path
        d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 22h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z"
        stroke={color}
      />
    </Svg>
  );
};
