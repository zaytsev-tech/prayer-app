import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC, useContext, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components';
import styled from 'styled-components';

import { setLogout } from '../../store/ducks/auth';
import { columnRequest } from '../../store/ducks/columns';
import { IconGear, IconPlus, IconPray } from '../../ui/icons';
import { AddColumn } from '../add-column';
import { BlockColumns } from '../columns';
import { PrayerDetails } from '../prayer-details';
import { Todo } from '../to-do';

export const StackDesk = createNativeStackNavigator();

export const MyDesk: FC = () => {
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);
  useEffect(() => {
    dispatch(columnRequest());
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
      <StackDesk.Screen
        name="Details"
        options={{
          headerStyle: {
            backgroundColor: theme.colors.brown,
          },
          headerTintColor: theme.colors.white,
          headerTitle: () => (
            <Header>
              <HeadText style={{ lineHeight: 20 }}>
                Prayer item two which is for my family to love God whole heartedly.
              </HeadText>
            </Header>
          ),
          headerTitleAlign: 'left',
          headerRight: () => (
            <Icon>
              <IconPray width={23} height={23} color={theme.colors.white} />
            </Icon>
          ),
        }}
      >
        {() => <PrayerDetails />}
      </StackDesk.Screen>
    </StackDesk.Navigator>
  );
};

const Header = styled(View)`
  margin: 0 auto;
  left: -63px;
  width: 97%;
  margin-top: 50px;
  margin-bottom: 20px;
  position: relative;
`;

const HeadText = styled(Text)`
  color: ${({ theme: { colors } }) => colors.white};
  position: relative;
`;

const Icon = styled(TouchableOpacity)`
  position: absolute;
  top: -39px;
  right: 2px;
  margin-bottom: 0px;
`;
