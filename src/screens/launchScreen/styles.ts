import { StyleSheet } from 'react-native';
import Theme from '../../styles/theme';
const styles = StyleSheet.create({
  icons: {
    height: 156,
    width: 156,
  },
  title: {
    fontSize: 28,
    marginVertical: 16,
    fontWeight: 'bold',
    color: Theme.colors.black,
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 28,
    color: Theme.colors.black,
  },
  button: {
    marginTop: 12,
    paddingHorizontal: 36,
    paddingVertical: 8,
    backgroundColor: Theme.colors.black,
    borderRadius: 4,
  },
});

export default styles;
