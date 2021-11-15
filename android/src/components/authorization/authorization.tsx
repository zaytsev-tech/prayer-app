import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

export const Authorization = () => {
  return (
    <View>
      <Text>Authorization Text</Text>
    </View>
  );
};

const Header = styled(View)`
  ${({theme: { typography }}) => typography.title}
`;
