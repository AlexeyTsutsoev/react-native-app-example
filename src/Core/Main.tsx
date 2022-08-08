import React, { FC } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from '../navigation/TabNavigator';

const Main: FC = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Main;
