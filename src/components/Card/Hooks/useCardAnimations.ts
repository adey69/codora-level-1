import { useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const ANIMATION_DURATION = 1000;

export default () => {
  const translateXCareerInfo = useSharedValue(-100);
  const careerInfoOpacity = useSharedValue(0);
  const translateYbottomSection = useSharedValue(100);
  const bottomSectionOpacity = useSharedValue(0);

  const careerInfoAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(translateXCareerInfo.value, {
            duration: ANIMATION_DURATION,
          }),
        },
      ],
      opacity: withTiming(careerInfoOpacity.value, {
        duration: ANIMATION_DURATION,
      }),
    };
  });

  const bottomSectionAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(translateYbottomSection.value, {
            duration: ANIMATION_DURATION,
          }),
        },
      ],
      opacity: withTiming(bottomSectionOpacity.value, {
        duration: ANIMATION_DURATION,
      }),
    };
  });

  useEffect(() => {
    translateXCareerInfo.value = 0;
    careerInfoOpacity.value = 1;
    bottomSectionOpacity.value = 1;
    translateYbottomSection.value = 0;
  }, []);

  return { careerInfoAnimated, bottomSectionAnimated };
};
