import { useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const ROTATION_DURATION = 2000;

export default () => {
  const chartRotation = useSharedValue(0);
  const chartOpacity = useSharedValue(0.2);

  const chartAnimated = useAnimatedStyle(() => ({
    transform: [{ rotate: `${chartRotation.value}deg` }],
    opacity: withTiming(chartOpacity.value, { duration: 1500 }),
  }));

  useEffect(() => {
    chartRotation.value = withRepeat(
      withTiming(360 * 3, { duration: ROTATION_DURATION }),
      1,
    );
    chartOpacity.value = 1;
  }, []);

  return {
    chartAnimated,
  };
};
