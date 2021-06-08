import { StyleSheet } from 'react-native';
import Theme from '../../styles/theme';
const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
  },
  questionInput: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.grey,
    paddingStart: 2,
  },
  choiceInput: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.grey,
    marginTop: 16,
    marginBottom: 8,
    paddingStart: 2,
  },
  button: {
    marginTop: 36,
    paddingHorizontal: 36,
    paddingVertical: 8,
    borderRadius: 4,
  },
});

export default styles;
