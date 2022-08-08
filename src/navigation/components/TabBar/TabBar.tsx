import React, { FC } from 'react';
import { Pressable, View } from 'react-native';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import TAB_ITEMS, { TabItem } from './tabBarData';
import styles from './TabBar.style';
import AlertService from '../../../utils/services/AlertService';

const TabBar: FC<BottomTabBarProps> = ({ state, navigation }) => {
  const navigateToTab = (tabItem: TabItem) => {
    console.log('test');

    if (!tabItem.index || !tabItem.route) {
      AlertService.showSimpleAlert('No route');
      return;
    }

    navigation.navigate(tabItem.route);
  };

  return (
    <View style={styles.container}>
      {TAB_ITEMS.map(tab => {
        const isSelected = tab.index === state.index;
        return (
          <Pressable
            key={tab.route?.toString() ?? 'No'}
            onPress={() => navigateToTab(tab)}>
            <tab.Icon fill={isSelected ? 'red' : 'black'} />
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabBar;
