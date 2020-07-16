import { DefaultTheme } from 'styled-components';
import { ThemeTitleEnum } from '../../interfaces/theme';

const lightTheme: DefaultTheme = {
  title: ThemeTitleEnum.light,
  colors: {
    primary: '#3d348b',
    secondary: '#f7b801',
    background: '#FFFFFF',
    text: '#04121B',
  },
};

export default lightTheme;
