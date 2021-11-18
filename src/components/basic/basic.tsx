import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { Authorization } from '../authorization';
import { MyDesk } from '../my-desk';
import { Main } from '../store/auth';

const Stack = createNativeStackNavigator();

interface Profile {
  auth: Main;
}

export const Basic = () => {
  const profile = useSelector((state: Profile) => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#FFF' },
          headerTintColor: '#514D47',
          headerTitleAlign: 'center',
        }}
      >
        {profile.user.name !== '' ? (
          <Stack.Screen name="My Desk" component={MyDesk} />
        ) : (
          <Stack.Screen name="Prayer" component={Authorization} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
