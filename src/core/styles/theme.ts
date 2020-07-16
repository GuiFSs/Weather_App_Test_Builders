import { DefaultTheme } from 'styled-components/native';
import { ITheme, ThemeTitleEnum } from '../interfaces/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}

export const lightTheme: DefaultTheme = {
  title: ThemeTitleEnum.light,
  colors: {
    primary: '#4995E9',
    secondary: '#f7b801',
    background: '#F3FBFF',
    text: '#2A365A',
  },
};

export const darkTheme: DefaultTheme = {
  title: ThemeTitleEnum.dark,
  colors: {
    primary: '#4995E9',
    secondary: '#f7b801',
    background: '#10103B',
    text: '#FFF',
  },
};
