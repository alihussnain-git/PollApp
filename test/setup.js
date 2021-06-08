import 'react-native-gesture-handler/jestSetup';
import '@testing-library/jest-native/extend-expect';
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('@react-navigation/native');
jest.mock('@react-navigation/core');
jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: () => jest.fn(),
}));
