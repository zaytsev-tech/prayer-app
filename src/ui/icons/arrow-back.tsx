import { FC } from 'react';
import Svg, { Line, Polyline } from 'react-native-svg';

import { IconProps } from './type';

export const IconArrowBack: FC<IconProps> = ({ width, height, color }) => {
  return (
    <Svg width={width} height={height} strokeWidth={2} viewBox="0 0 24 24">
      <Line x1="20" y1="12" x2="4" y2="12" stroke={color} />
      <Polyline points="10 18 4 12 10 6" stroke={color} />
    </Svg>
  );
};
