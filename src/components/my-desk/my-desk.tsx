import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext, useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import { setLogout, UserState } from '../../store/ducks/auth';
import { columnRequest } from '../../store/ducks/columns';
import { IconGear, IconPlus } from '../../ui/icons';
import { AddColumn } from '../add-column';
import { BlockColumns } from '../columns';
import { Todo } from '../to-do';

interface UserSelectProp {
  auth: UserState;
}

export const StackDesk = createNativeStackNavigator();

export const MyDesk = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state: UserSelectProp) => state.auth);
  const theme = useContext(ThemeContext);
  useEffect(() => {
    dispatch(columnRequest(profile.user.token));
  }, []);
  return (
    <StackDesk.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.white },
        headerTintColor: theme.colors.textBlack,
        headerTitleAlign: 'center',
      }}
    >
      <StackDesk.Screen
        options={({ navigation: { navigate } }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigate('Add Column')}>
              <IconPlus width={25} height={25} color={theme.colors.blue} />
            </TouchableOpacity>
          ),
        })}
        name="My Desk"
        component={BlockColumns}
      />
      <StackDesk.Screen name="Add Column" component={AddColumn} />
      <StackDesk.Screen
        name="To do"
        component={Todo}
        options={() => ({
          headerLeft: () => <View></View>,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                dispatch(setLogout());
              }}
            >
              <IconGear width={25} height={25} color={theme.colors.blue} />
            </TouchableOpacity>
          ),
        })}
      />
    </StackDesk.Navigator>
  );
};
