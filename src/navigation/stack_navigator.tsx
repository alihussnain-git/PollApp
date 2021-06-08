import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import QuestionsScreen from '../screens/questionsScreen/questionsScreen';
import LaunchScreen from '../screens/launchScreen/launchScreen';
import QuestionDetail from '../screens/questionDetail/questionDetail';
import Theme from '../styles/theme';
import Strings from '../strings/strings';
export type RootStackParamList = {
  LaunchScreen: undefined;
  QuestionsScreen: undefined;
  QuestionDetail: { questionId: string };
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
      <Stack.Screen
        options={{
          title: Strings.questions,
          headerBackTitleVisible: false,
          headerTintColor: Theme.colors.black,
        }}
        name='QuestionsScreen'
        component={QuestionsScreen}
      />
      <Stack.Screen
        options={{
          title: Strings.questionDetail,
          headerBackTitleVisible: false,
          headerTintColor: Theme.colors.black,
        }}
        name='QuestionDetail'
        component={QuestionDetail}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
