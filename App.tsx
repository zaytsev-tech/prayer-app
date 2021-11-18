/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';

import { UserProvider } from './src/components/auth-provider';
import { theme } from './src/styles';
import { ThemeProvider } from 'styled-components';
import { Basic } from './src/components/basic/';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Basic />
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
