import React from 'react';
import styled from 'styled-components';
import { ActivityIndicator, View } from 'react-native';

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
