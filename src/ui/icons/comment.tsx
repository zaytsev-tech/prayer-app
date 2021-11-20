import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './type';

export const IconComment: FC<IconProps> = ({ width, height, color }) => {
  return (
    <Svg width={width} height={height} fill={color} strokeWidth={1} viewBox="0 0 24 24">
      <Path
        d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"
        stroke={color}
      />
    </Svg>
  );
};
