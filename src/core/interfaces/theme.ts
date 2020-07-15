export interface ITheme {
  colors: {
    title: ThemeTitleEnum,
    primary: '#3d348b',
    secondary: '#f7b801',

    background: '#f5f5f5',
    text: '#333',
  },
}

export enum ThemeTitleEnum {
  light, dark
}
