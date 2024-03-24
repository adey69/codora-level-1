import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { PLAYERS } from '../../data';
import styles from './styles';
import { Separator } from '..';
import { Images } from '../../assets/images';
import { useCard, useCardAnimations } from './Hooks';
import Animated from 'react-native-reanimated';
import { APP_TEXT } from '../../strings';

interface ICardProps {
  picture: ImageSourcePropType;
  name: string;
  position: string;
  team: string;
  dateOfBirth: string;
  origin: string;
  height: string;
  weight: string;
  battingHand: string;
  throwingHand: string;
}

const Card = (props: ICardProps) => {
  const {
    picture,
    name,
    position,
    team,
    dateOfBirth,
    origin,
    height,
    weight,
    battingHand,
    throwingHand,
  } = props;

  const { bottomSectionAnimated, careerInfoAnimated } = useCardAnimations();
  const { liked, toggleLike } = useCard();

  return (
    <ImageBackground style={styles.container} source={picture}>
      <View style={styles.overlay} />
      <TouchableOpacity onPress={toggleLike}>
        <Image
          source={liked ? Images.heartFilled : Images.heart}
          style={[styles.heartButton, !liked && styles.heartUnfilled]}
        />
      </TouchableOpacity>
      <View style={styles.internalContainer}>
        <Animated.View style={[styles.careerContainer, careerInfoAnimated]}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.careerInfo}>{position}</Text>
          <Text style={styles.careerInfo}>{team}</Text>
          <Text style={styles.careerInfo}>{dateOfBirth}</Text>
          <Text style={[styles.careerInfo, styles.originInfo]}>{origin}</Text>
        </Animated.View>
        <Animated.View style={[styles.bottomContainer, bottomSectionAnimated]}>
          <View style={styles.bioContainer}>
            <Text style={styles.bio}>{APP_TEXT.height}</Text>
            <Text style={[styles.bioInfo, styles.bio]}>{height}</Text>
          </View>
          <Separator />
          <View style={styles.bioContainer}>
            <Text style={styles.bio}>{APP_TEXT.weight}</Text>
            <Text style={[styles.bioInfo, styles.bio]}>{weight}</Text>
          </View>
          <Separator />
          <View style={styles.bioContainer}>
            <Text style={styles.bio}>{APP_TEXT.batted}</Text>
            <Text style={[styles.bioInfo, styles.bio]}>{battingHand}</Text>
          </View>
          <Separator />
          <View style={styles.bioContainer}>
            <Text style={styles.bio}>{APP_TEXT.threw}</Text>
            <Text style={[styles.bioInfo, styles.bio]}>{throwingHand}</Text>
          </View>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

export default React.memo(Card);
