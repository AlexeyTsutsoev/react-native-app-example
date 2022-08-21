import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Pressable, View } from 'react-native';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import PopUp from '../PopUp/PopUp';
import useTheme from '../../../hooks/useTheme';

import TAB_ITEMS, { TabItem } from './tabBar.model';
import getStyles from './TabBar.style';

const TabBar: FC<BottomTabBarProps> = ({ state, navigation }) => {
  // MARK - States
  const [isShowPopUp, setShowPopUp] = useState(false);

  // MARK - Styles
  const theme = useTheme();
  const insents = useSafeAreaInsets();
  const styles = useMemo(() => getStyles(insents, theme), [insents, theme]);

  // MARK - Animations
  const rotation = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  // MARK - Callbacks
  const navigateToTab = useCallback(
    (tabItem: TabItem) => {
      if (!tabItem.index || !tabItem.route) {
        setShowPopUp(prev => !prev);
        return;
      }

      navigation.navigate(tabItem.route);
    },
    [navigation],
  );

  // MARK - Effects
  useEffect(() => {
    if (isShowPopUp) {
      rotation.value = withTiming(45);
    } else {
      rotation.value = withTiming(0);
    }
  }, [isShowPopUp, rotation]);

  return (
    <>
      <PopUp isVisible={isShowPopUp} />

      <View style={styles.container}>
        {TAB_ITEMS.map(tab => {
          const isSelected = tab.index === state.index;
          const isNoRoute = !tab.route;

          return (
            <Pressable
              key={tab.route?.toString() ?? 'No'}
              onPress={() => navigateToTab(tab)}>
              {isNoRoute ? (
                <Animated.View style={[styles.centralTab, animatedStyles]}>
                  <tab.Icon fill={theme.font} />
                </Animated.View>
              ) : (
                <tab.Icon fill={isSelected ? theme.primary : theme.font} />
              )}
            </Pressable>
          );
        })}
      </View>
    </>
  );
};

export default TabBar;
