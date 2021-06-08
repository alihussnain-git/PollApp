import { StyleSheet } from 'react-native';
import Theme from '../../styles/theme';
const styles = StyleSheet.create({
  flatList: {
    marginTop: 12,
  },
  flatListContainer: {
    paddingBottom: 86,
  },
  progressIndicator: {
    alignSelf: 'center',
    marginTop: 16,
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.black,
    shadowColor: Theme.colors.grey,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 14,
    elevation: 4,
  },
  floatingButtonPosition: {
    position: 'absolute',
    bottom: 42,
    right: 28,
  },
  plusLabel: {
    color: Theme.colors.white,
    fontWeight: 'bold',
    fontSize: 32,
  },
});

export default styles;
