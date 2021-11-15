import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { SignIn } from './screens/sign-in';

const Tab = createBottomTabNavigator();

export const Authorization = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={SignIn} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};
