import { useNavigation } from '@react-navigation/core';
import { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import { Column } from '../../store/ducks/columns';

interface BlockProps {
  column: Column;
}

export const ColumnBlock: FC<BlockProps> = ({ column }) => {
  const navigation = useNavigation();
  return (
    <Block
      key={column.id}
      onPress={() =>
        navigation.navigate(
          'Desk' as never,
          {
            screen: 'To do',
            params: { column },
          } as never,
        )
      }
    >
      <BlockText>{column.title}</BlockText>
    </Block>
  );
};

const Block = styled(TouchableOpacity)`
  background: ${({ theme: { colors } }) => colors.white};
  border: 1px solid ${({ theme: { colors } }) => colors.borderBlack};
  box-sizing: border-box;
  border-radius: 4px;
  margin: 2%;
  margin-bottom: 0;
`;

const BlockText = styled(Text)`
  ${({ theme: { typography } }) => typography.body.item};
  margin: 5% 2%;
`;
