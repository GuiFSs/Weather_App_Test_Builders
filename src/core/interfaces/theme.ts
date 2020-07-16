export interface ITheme {
  title: ThemeTitleEnum,
  colors: {
    primary: string,
    secondary: string,

    background: string,
    text: string,
  },
}

export enum ThemeTitleEnum {
  light, dark
}
