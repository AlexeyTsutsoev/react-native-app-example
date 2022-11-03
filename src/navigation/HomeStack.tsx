import React, { FC } from 'react';

import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import LottieDemoScreen from '../screens/LottieDemoScreen/LottieDemoScreen';
import MainHeader from './components/MainHeader/MainHeader';

/**
 * Prepare routes (keys) and params for it (values)
 */
export type HomeStackParamList = {
  HomeScreen: undefined;
  SceletonExampleScreen: { delay: number };
  LottieDemoScreen: { name: string; repeatAnimation?: boolean };
};

/**
 * You can use destructurization or just Object
 */
const { Navigator, Screen } = createStackNavigator<HomeStackParamList>();

const homeOption: StackNavigationOptions = {
  title: 'Home title',
  header: props => <MainHeader {...props} />,
};

const HomeStack: FC = () => {
  return (
    <Navigator>
      <Screen
        name="LottieDemoScreen"
        component={LottieDemoScreen}
        options={homeOption}
      />
      <Screen name="HomeScreen" component={() => null} options={homeOption} />
      <Screen name="SceletonExampleScreen" component={() => null} />
    </Navigator>
  );
};

export default HomeStack;
