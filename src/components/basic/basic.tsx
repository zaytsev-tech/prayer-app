import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import { Main } from '../../store/auth';
import { theme } from '../../styles';
import { IconPlus } from '../../ui';
import { Authorization } from '../authorization';
import { MyDesk } from '../my-desk';

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
          headerRight: () => (
            <IconPlus width={25} height={25} color={theme.colors.blue} />
          ),
        }}
      >
        {profile.auth === true ? (
          <Stack.Screen name="My Desk" component={MyDesk} />
        ) : (
          <Stack.Screen name="Prayer" component={Authorization} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
