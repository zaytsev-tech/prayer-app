import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import { UserState } from '../../store/ducks/auth';
import { Authorization } from '../authorization';
import { MyDesk } from '../my-desk';

export const Stack = createNativeStackNavigator();

interface Profile {
  auth: UserState;
}

export const Basic = () => {
  const profile = useSelector((state: Profile) => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {profile.auth === true ? (
          <Stack.Screen options={{ headerShown: false }} name="Desk" component={MyDesk} />
        ) : (
          <Stack.Screen name="Prayer" component={Authorization} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
