import { ActivityIndicator, View } from 'react-native';
import styled from 'styled-components';

export const Spinner = () => {
  return (
    <Loader>
      <Circle size="large" color="#BFB393" />
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
