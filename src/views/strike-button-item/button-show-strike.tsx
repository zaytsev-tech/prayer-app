import { FC } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import { DefaultButton } from '../../ui';

interface ShowStrikeProps {
  bool: boolean;
  onPress: () => void;
}

export const ButtonShowStrike: FC<ShowStrikeProps> = ({ bool, onPress }) => {
  return (
    <Container>
      {bool ? (
        <DefaultButton title="HIDE ANSWERED PRAYERS" onPress={onPress} />
      ) : (
        <DefaultButton title="SHOW ANSWERED PRAYERS" onPress={onPress} />
      )}
    </Container>
  );
};

const Container = styled(View)`
  margin-right: 10%;
  margin-left: 10%;
  top: 10px;
  bottom: 20px;
  height: 40px;
  border-bottom-color: ${({ theme: { colors } }) => colors.borderBlack};
  border-bottom-width: 1px;
  overflow: hidden;
`;
