type TabNavigationProp =
  import('@react-navigation/bottom-tabs').BottomTabNavigationProp<BottomTabsParamsList>;

type HomeStackNavigationProp =
  import('@react-navigation/stack').StackNavigationProp<HomeStackParamsList>;

type BottomTabsParamsList = {
  Home: undefined;
  Epxlore: undefined;
  Numbers: undefined;
};

type HomeStackParamsList = {
  HomeScreen: undefined;
  PlayerDetails: {
    player: IPlayer;
  };
};

type PlayerDetailsRouteProp = import('@react-navigation/native').RouteProp<
  HomeStackParamsList,
  'PlayerDetails'
>;
