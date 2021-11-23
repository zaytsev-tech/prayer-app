import { FC } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

import { IconProps } from './type';

export const IconUser: FC<IconProps> = ({ width, height, color }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke={color} />
      <Circle cx="12" cy="7" r="4" stroke={color} />
    </Svg>
  );
};
