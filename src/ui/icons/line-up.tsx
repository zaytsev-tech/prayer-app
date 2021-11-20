import { FC } from 'react';
import Svg, { Line } from 'react-native-svg';

import { IconProps } from './type';

export const IconLineUp: FC<IconProps> = ({ width, height, color }) => {
  return (
    <Svg
      width={width}
      height={height}
      strokeWidth={2}
      strokeLinejoin="round"
      strokeLinecap="round"
      viewBox="0 0 24 24"
    >
      <Line x1="12" y1="20" x2="12" y2="4" stroke={color} />
    </Svg>
  );
};
