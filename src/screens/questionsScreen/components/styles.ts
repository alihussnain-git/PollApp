import { StyleSheet } from 'react-native';
import Theme from '../../../styles/theme';
const styles = StyleSheet.create({
  cardStyle: {
    marginHorizontal: 12,
    marginBottom: 12,
    backgroundColor: Theme.colors.white,
    padding: 16,
  },
  questionFlex: {
    flex: 0.8,
  },
  voteFlex: {
    flex: 0.2,
  },
  questionContainer: {
    marginTop: 6,
  },
  questionLabel: {
    color: Theme.colors.black,
    fontSize: 16,
  },
  votesLabel: {
    color: Theme.colors.grey,
    fontSize: 12,
  },
  timeLabel: {
    color: Theme.colors.grey,
    fontSize: 12,
    marginStart: 16,
  },
  voteButton: {
    backgroundColor: Theme.colors.black,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  voteButtonLabel: {
    color: Theme.colors.white,
    fontSize: 10,
  },
});

export default styles;
