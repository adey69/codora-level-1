import {
  FlatList,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import { PLAYERS } from '../../data';
import { useCallback } from 'react';
import { Separator } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { APP_TEXT } from '../../strings';

const Home = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();

  const onItemPress = useCallback((index: number) => {
    navigation.navigate('PlayerDetails', {
      player: PLAYERS[index],
    });
  }, []);

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<IPlayer>) => {
      return (
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => onItemPress(index)}>
          <Text style={styles.listItemText}>{item.name}</Text>
        </TouchableOpacity>
      );
    },
    [],
  );

  const renderSeparator = useCallback(
    () => <Separator direction="horizontal" />,
    [],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{APP_TEXT.playersList}</Text>
      <FlatList
        data={PLAYERS}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default Home;
