import React, { FC, useCallback, useEffect, useState } from 'react';

import { BlurView } from '@react-native-community/blur';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import PromiseService from '../../../utils/services/PromiseService';

import styles from './PopUp.style';
import { POP_UP_ITEMS } from './PopUp.model';
import PopUpItem from './components/PopUpItem/PopUpItem';

type Props = {
  isVisible: boolean;
};

const PopUp: FC<Props> = ({ isVisible }) => {
  // MARK - States
  const [isSHown, setShown] = useState(false);

  // MARK - Animation
  const opacity = useSharedValue(0);

  const animatedContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  // MARK - Callbacks
  const shownToggle = useCallback(async () => {
    if (isVisible) {
      setShown(true);
      opacity.value = withTiming(1);
    } else {
      opacity.value = withTiming(0, { duration: 500 });
      await PromiseService.sleep(500);
      setShown(false);
    }
  }, [isVisible, opacity]);

  // MARK - Effects
  useEffect(() => {
    shownToggle();
  }, [shownToggle]);

  // MARK - Renders
  if (!isSHown) {
    return null;
  }

  return (
    <Animated.View style={[styles.container, animatedContainerStyles]}>
      <BlurView style={styles.innerContainer}>
        {POP_UP_ITEMS.map((item, index) => (
          <PopUpItem key={item.title} index={index} item={item} />
        ))}
      </BlurView>
    </Animated.View>
  );
};

export default PopUp;
