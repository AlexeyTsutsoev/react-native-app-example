import React, { FC } from 'react';

import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import TabBar from './components/TabBar/TabBar';

export type RootAppParamList = {
  HomeNavigator: undefined;
  StoreNavigation: undefined;
  OrdersNavigation: undefined;
  SettingNavigation: undefined;
};

const Tab = createBottomTabNavigator<RootAppParamList>();

const tabOptions: BottomTabNavigationOptions = {
  header: () => null,
};

const TabNavigator: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={tabOptions}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="HomeNavigator" component={HomeStack} />
      <Tab.Screen name="StoreNavigation" component={HomeStack} />
      <Tab.Screen name="OrdersNavigation" component={HomeStack} />
      <Tab.Screen name="SettingNavigation" component={HomeStack} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
