import { DefaultTheme } from '@react-navigation/native';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    white: 'white',
    black: 'black',
    grey: 'grey',
    lightGrey: '#f2f2f2',
  },
};

export default Theme;
