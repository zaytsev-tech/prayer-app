import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import { UserState } from '../../store/ducks/auth';
import { IconPlus } from '../../ui';
import { AddColumn } from '../add-column/add-column';
import { Authorization } from '../authorization';
import { MyDesk } from '../my-desk';

export const Stack = createNativeStackNavigator();

interface Profile {
  auth: UserState;
}

export const Basic = () => {
  const profile = useSelector((state: Profile) => state.auth);
  const theme = useContext(ThemeContext);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.colors.white },
          headerTintColor: theme.colors.black,
          headerTitleAlign: 'center',
        }}
      >
        {profile.auth === true ? (
          <>
            <Stack.Screen
              name="My Desk"
              component={MyDesk}
              options={({ navigation: { navigate } }) => ({
                headerRight: () => (
                  <TouchableOpacity onPress={() => navigate('Add Column')}>
                    <IconPlus width={25} height={25} color={theme.colors.blue} />
                  </TouchableOpacity>
                ),
              })}
            />
            <Stack.Screen name="Add Column" component={AddColumn} />
          </>
        ) : (
          <Stack.Screen name="Prayer" component={Authorization} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
