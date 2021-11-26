import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FC, useContext, useEffect } from 'react';
import { Route } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import { Prayer, prayerRequest } from '../../store/ducks/prayers';
import { MyPrayers } from '../../views/my-prayers';
import { Subscribed } from '../../views/subscribed';

interface TodoProps {
  route: Route;
}

interface PrayersProps {
  prayers: Record<string, Prayer> | Prayer;
}

const Tab = createMaterialTopTabNavigator();

export const Todo: FC<TodoProps> = ({ route }) => {
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);
  const prayers = useSelector((state: PrayersProps) => state.prayers);
  useEffect(() => {
    dispatch(prayerRequest());
  }, []);

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
        {() => <MyPrayers column={route.params.column} prayers={prayers} />}
      </Tab.Screen>
      <Tab.Screen name="Subscribed">
        {() => <Subscribed column={route.params.column} prayers={prayers} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
