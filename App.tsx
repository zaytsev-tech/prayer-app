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

import { Basic } from './src/components/basic/';
import { StoreProvider } from './src/components/store-provider';
import { theme } from './src/styles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <Basic />
      </StoreProvider>
    </ThemeProvider>
  );
};

export default App;
