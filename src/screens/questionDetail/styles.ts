import { StyleSheet } from 'react-native';
import Theme from '../../styles/theme';
const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
  },
  progressIndicator: {
    alignSelf: 'center',
  },
  questionLabel: {
    color: Theme.colors.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  timeLabel: {
    fontSize: 12,
    color: Theme.colors.grey,
    marginVertical: 8,
  },
  choiceScroll: {
    marginBottom: 86,
  },
  choiceContainer: {
    marginVertical: 6,
  },
  questionSelector: {
    justifyContent: 'space-between',
    backgroundColor: Theme.colors.lightGrey,
    borderRadius: 4,
    padding: 8,
    alignItems: 'center',
  },
  votesLabel: {
    color: Theme.colors.grey,
    fontSize: 12,
    height: 20,
    alignSelf: 'center',
    paddingTop: 2,
  },
  button: {
    marginTop: 12,
    paddingHorizontal: 36,
    paddingVertical: 10,
    backgroundColor: Theme.colors.black,
    borderRadius: 4,
  },
});

export default styles;
