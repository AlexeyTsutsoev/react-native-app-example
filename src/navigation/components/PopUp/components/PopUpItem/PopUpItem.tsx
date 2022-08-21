import React, { FC, useEffect, useMemo } from 'react';
import { Text, View } from 'react-native';

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import AnimatedPress from '../../../../../components/AnimatedPress/AnimatedPress';

import { PopUpItemType } from '../../PopUp.model';
import getStyles from './PopUpItem.style';

type Props = {
  item: PopUpItemType;
  index: number;
};

const PopUpItem: FC<Props> = ({ item, index }) => {
  // MARK - Styles
  const styles = useMemo(() => getStyles(item.color), [item.color]);

  // MARK - Animations
  const position = useSharedValue(500);

  const animatedItemStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: position.value }],
    };
  });

  // MARK - Effects
  useEffect(() => {
    position.value = withTiming(0, {
      duration: 1000 / (index + 1),
      easing: Easing.inOut(Easing.exp),
    });
  }, [index, position]);

  return (
    <Animated.View style={animatedItemStyle}>
      <AnimatedPress onPress={item.onPress}>
        <View style={styles.container}>
          <Text>{item.title}</Text>
        </View>
      </AnimatedPress>
    </Animated.View>
  );
};

export default PopUpItem;
