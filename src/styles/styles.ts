import { StyleSheet } from 'react-native';
import Theme from './theme';
const appStyles = StyleSheet.create({
  defaultFlex: {
    flex: 1,
    backgroundColor: Theme.colors.white,
  },
  centerAlignContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowDirection: {
    flexDirection: 'row',
  },
});

export default appStyles;
