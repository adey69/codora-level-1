import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Explore, Home, Numbers } from '../screens';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Numbers" component={Numbers} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
