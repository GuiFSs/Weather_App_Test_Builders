import { DefaultTheme } from 'styled-components/native';
import { ITheme, ThemeTitleEnum } from '../interfaces/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}

const primary = '#3879E0';

export const lightTheme: DefaultTheme = {
  title: ThemeTitleEnum.light,
  colors: {
    primary,
    secondary: '#f7b801',
    background: '#F3FBFF',
    text: '#2A365A',
  },
};

export const darkTheme: DefaultTheme = {
  title: ThemeTitleEnum.dark,
  colors: {
    primary,
    secondary: '#f7b801',
    background: '#10103B',
    text: '#FFFFFF',
  },
};
