import React, { FC, useMemo } from 'react';
import { View, Text } from 'react-native';

import { StackHeaderProps } from '@react-navigation/stack';
import useTheme from '../../../hooks/useTheme';

import BackArrow from '../../../ui/assets/svgs/back-arrow.svg';

import getStyles from './MainHeader.style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MainHeader: FC<StackHeaderProps> = ({ options }) => {
  // MARK - Styles
  const theme = useTheme();
  const insents = useSafeAreaInsets();
  const styles = useMemo(() => getStyles(theme, insents), [insents, theme]);

  return (
    <View style={styles.container}>
      <BackArrow />
      <Text>{options.title}</Text>
      <View style={styles.nonVisible} />
    </View>
  );
};

export default MainHeader;
