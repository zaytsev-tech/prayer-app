import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { SignIn } from './screens/sign-in';
import { SignUp } from './screens/sign-up';

const Tab = createBottomTabNavigator();

export const Authorization = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Sign in" component={SignIn} />
      <Tab.Screen name="Sign up" component={SignUp} />
    </Tab.Navigator>
  );
};
