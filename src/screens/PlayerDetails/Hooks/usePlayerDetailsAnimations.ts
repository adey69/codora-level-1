import { useCallback, useState } from 'react';
import { Dimensions } from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const ANIMATION_DURATION = 500;
const SCREEN_WIDTH = Dimensions.get('screen').width;

export default () => {
  const searchBoxWidth = useSharedValue(0);
  const searchInputTranslateX = useSharedValue(100);
  const headerContainerTranslateX = useSharedValue(0);
  const headerContainerWidth = useSharedValue(SCREEN_WIDTH);
  const headerContentOpacity = useSharedValue(1);

  const [showHeaderContent, setShowHeaderContent] = useState(true);
  const [showCloseSearch, setShowCloseSearch] = useState(false);

  const headerContainerAnimated = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: headerContainerTranslateX.value }],
      width: withTiming(headerContainerWidth.value, {
        duration: ANIMATION_DURATION,
      }),
      opacity: withTiming(headerContentOpacity.value, {
        duration: ANIMATION_DURATION,
      }),
    };
  });

  const searchContainerAnimated = useAnimatedStyle(() => {
    return {
      width: withTiming(searchBoxWidth.value, {
        duration: ANIMATION_DURATION,
      }),
      transform: [
        {
          translateX: withTiming(searchInputTranslateX.value, {
            duration: 150,
          }),
        },
      ],
    };
  });

  const handleSearch = useCallback(() => {
    searchBoxWidth.value = Dimensions.get('screen').width - 32;
    headerContainerTranslateX.value = -400;
    headerContainerWidth.value = 0;
    searchInputTranslateX.value = 0;
    headerContentOpacity.value = 0;
    setTimeout(() => setShowHeaderContent(false), 150);
    setTimeout(() => setShowCloseSearch(true), ANIMATION_DURATION);
  }, []);

  const handleSearchClose = useCallback(() => {
    searchBoxWidth.value = 0;
    headerContainerTranslateX.value = 0;
    headerContainerWidth.value = SCREEN_WIDTH;
    searchInputTranslateX.value = 500;
    headerContentOpacity.value = 1;
    setTimeout(() => setShowHeaderContent(true), 150);
    setTimeout(() => setShowCloseSearch(false), ANIMATION_DURATION);
  }, []);

  return {
    handleSearch,
    handleSearchClose,
    setShowHeaderContent,
    searchContainerAnimated,
    headerContainerAnimated,
    showHeaderContent,
    showCloseSearch,
  };
};
