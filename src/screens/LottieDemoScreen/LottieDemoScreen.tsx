import React, { FC, useMemo } from 'react';
import { View } from 'react-native';

import LottieView from 'lottie-react-native';

import useTheme from '../../hooks/useTheme';

import getStyles from './LottieDemoScreen.style';

const animation = require('../../ui/animations/WorkInProgress.json');

const LottieDemoScreen: FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <LottieView source={animation} autoPlay loop />
    </View>
  );
};

export default LottieDemoScreen;
