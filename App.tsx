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

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Authorization } from './src/components/authorization';
import { UserProvider } from './src/components/auth-provider';
import { theme } from './src/styles';
import { ThemeProvider } from 'styled-components';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#FFF' },
              headerTintColor: '#514D47',
              headerTitleAlign: 'center',
            }}
          >
            <Stack.Screen name="Prayer" component={Authorization} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
