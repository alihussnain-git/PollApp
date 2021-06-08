import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LaunchScreen from '../screens/launchScreen/launchScreen';

export type RootStackParamList = {
  LaunchScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='LaunchScreen'
        component={LaunchScreen}
        options={{
          headerShown: false,
          headerRight: undefined,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
