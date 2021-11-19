import { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import { Column } from '../../store/columns';

interface ColumnBlockProp {
  column: Column;
}

export const ColumnBlock: FC<ColumnBlockProp> = ({ column }) => {
  return (
    <Block key={column.id}>
      <BlockText>{column.title}</BlockText>
    </Block>
  );
};

const Block = styled(TouchableOpacity)`
  background: ${({ theme: { colors } }) => colors.white};
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 2%;
  margin-bottom: 0;
`;

const BlockText = styled(Text)`
  ${({ theme: { typography } }) => typography.body.item};
  margin: 5% 2%;
`;
