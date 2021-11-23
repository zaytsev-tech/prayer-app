import { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';

export const Spinner = () => {
  const theme = useContext(ThemeContext);
  return (
    <Loader>
      <Circle size="large" color={theme.colors.brown} />
    </Loader>
  );
};

const Loader = styled(View)`
  vertical-align: middle;
`;

const Circle = styled(ActivityIndicator)`
  position: relative;
  margin-top: 50%;
`;
