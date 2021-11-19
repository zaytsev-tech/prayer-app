/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { ThemeProvider } from 'styled-components';

import { UserProvider } from './src/components/auth-provider';
import { Basic } from './src/components/basic/';
import { theme } from './src/styles';

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
