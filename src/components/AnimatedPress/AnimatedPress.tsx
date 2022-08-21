import React, { FC } from 'react';
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from 'react-native';

import styles from './AnimatedPress.style';

type Props = {
  style?: StyleProp<ViewStyle>;
} & PressableProps;

const AnimatedPress: FC<Props> = ({ children, style, ...rest }) => {
  // MARK - Styles
  const getStyles = ({
    pressed,
  }: PressableStateCallbackType): StyleProp<ViewStyle> => {
    if (!pressed) {
      return style;
    }
    return [style, styles.pressed];
  };

  return (
    <Pressable style={getStyles} {...rest}>
      {children}
    </Pressable>
  );
};

export default AnimatedPress;
