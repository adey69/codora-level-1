import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Explore, Numbers } from '../screens';
import { useMemo } from 'react';
import { Image } from 'react-native';
import { Images } from '../assets/images';
import styles from './styles';
import HomeNavigator from './HomeNavigator';
import { COLORS } from '../theme';

const Tab = createBottomTabNavigator<BottomTabsParamsList>();

const TabNavigator = () => {
  const HomeIcon = useMemo(
    () => <Image source={Images.home} style={styles.tabIcon} />,
    [],
  );
  const ExploreIcon = useMemo(
    () => <Image source={Images.explore} style={styles.tabIcon} />,
    [],
  );
  const NumbersIcon = useMemo(
    () => <Image source={Images.numbers} style={styles.tabIcon} />,
    [],
  );
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: COLORS.yellowBg,
          borderBottomWidth: 1,
          elevation: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{ tabBarIcon: () => HomeIcon, headerShown: false }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{ tabBarIcon: () => ExploreIcon }}
      />
      <Tab.Screen
        name="Numbers"
        component={Numbers}
        options={{ tabBarIcon: () => NumbersIcon }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
