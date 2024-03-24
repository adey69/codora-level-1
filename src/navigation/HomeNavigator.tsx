import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home, PlayerDetails } from '../screens';
import { COLORS } from '../theme';

const Stack = createStackNavigator<HomeStackParamsList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: COLORS.yellowBg,
          borderBottomWidth: 1,
          elevation: 10,
        },
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerTitle: 'Home' }}
      />
      <Stack.Screen
        name="PlayerDetails"
        component={PlayerDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
