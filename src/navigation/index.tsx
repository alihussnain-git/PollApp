import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Theme from '../styles/theme';
import StackNavigator from './stack_navigator';

const RootNavigation = () => {
  return (
    <NavigationContainer theme={Theme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigation;
