import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconPlusProps {
  width: number;
  height: number;
  color: string;
}

export const IconPlus: FC<IconPlusProps> = ({ width, height, color }) => {
  return (
    <Svg width={width} height={height} fill={color} viewBox="0 0 24 24">
      <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" stroke={color} />
    </Svg>
  );
};
