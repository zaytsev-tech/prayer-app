import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FC, useContext } from 'react';
import { Route } from 'react-native';
import { ThemeContext } from 'styled-components';

import { MyPrayers } from '../../views/my-prayers';
import { Subscribed } from '../../views/subscribed';

interface TodoProps {
  route: Route;
}

const Tab = createMaterialTopTabNavigator();
const theme = useContext(ThemeContext);

export const Todo: FC<TodoProps> = ({ route }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.blue,
        tabBarInactiveTintColor: theme.colors.gray,
        tabBarIndicatorStyle: {
          borderColor: theme.colors.blue,
          backgroundColor: theme.colors.blue,
        },
        tabBarLabelStyle: {
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen name="My prayers">
        {() => <MyPrayers column={route.params.column} />}
      </Tab.Screen>
      <Tab.Screen name="Subscribed" component={Subscribed} />
    </Tab.Navigator>
  );
};
