import { DefaultTheme } from 'styled-components';
import { ThemeTitleEnum } from '../../interfaces/theme';

const darkTheme: DefaultTheme = {
  title: ThemeTitleEnum.dark,
  colors: {
    primary: '#3d348b',
    secondary: '#f7b801',

    background: '#f5f5f5',
    text: '#333',
  },
};

export default darkTheme;
