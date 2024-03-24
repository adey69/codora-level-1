import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { Card, CharContainer } from '../../components';
import { Images } from '../../assets/images';
import { usePlayerDetailsAnimations } from './Hooks';
import { APP_TEXT } from '../../strings';
import { useNavigation, useRoute } from '@react-navigation/native';

const PlayerDetails = () => {
  const { params } = useRoute<PlayerDetailsRouteProp>();
  const navigation = useNavigation();
  const {
    headerContainerAnimated,
    searchContainerAnimated,
    showHeaderContent,
    showCloseSearch,
    handleSearch,
    handleSearchClose,
  } = usePlayerDetailsAnimations();

  const { player } = params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        {showHeaderContent && (
          <Animated.View
            style={[headerContainerAnimated, styles.headerContentContainer]}>
            <TouchableOpacity onPress={navigation.goBack}>
              <Image source={Images.back} style={styles.backIcon} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{APP_TEXT.baseballNumbers}</Text>
            <TouchableOpacity onPress={handleSearch}>
              <Image source={Images.search} style={styles.searchIcon} />
            </TouchableOpacity>
          </Animated.View>
        )}

        {!showHeaderContent && (
          <Animated.View
            style={[searchContainerAnimated, styles.searchInputWrapper]}>
            <Image source={Images.search} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder={APP_TEXT.searchHere}
            />
            {showCloseSearch && (
              <TouchableOpacity onPress={handleSearchClose}>
                <Image source={Images.close} style={styles.searchIcon} />
              </TouchableOpacity>
            )}
          </Animated.View>
        )}
      </View>
      <ScrollView>
        <Card
          name={player.name}
          battingHand={player.battingHand}
          dateOfBirth={player.dateOfBirth}
          height={player.height}
          origin={player.origin}
          picture={player.picture}
          position={player.position}
          team={player.team}
          throwingHand={player.throwingHand}
          weight={player.weight}
        />
        <CharContainer
          bases={player.bases}
          plateAppearances={player.plateAppearances}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(PlayerDetails);
