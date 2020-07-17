/**
 * Types definitions
 */

import { ITheme } from '../../../core/interfaces/theme';
import { LoaderStatusEnum } from '../../../core/enums/loaderStatus';

export enum PreferencesTypesEnum {
  SET_THEME = 'preferences/SET_THEME',
  SET_THEME_STORE = 'preferences/SET_THEME_STORE',
  SET_LOADER_STATUS = 'preferences/SET_LOADER_STATUS',

  CLEAR_PREFERENCES_STATE = 'preferences/CLEAR_THEME_STATE',
}

/**
 * State interface
 */
export interface IPreferencesState {
  readonly theme: ITheme
  readonly loaderStatus: LoaderStatusEnum
}

/**
 * Actions types interfaces
 */

export interface ISetTheme {
  type: typeof PreferencesTypesEnum.SET_THEME
  payload: ITheme
}

export interface ISetThemeStore {
  type: typeof PreferencesTypesEnum.SET_THEME_STORE
  payload: ITheme
}

export interface ISetPreferencesLoaderStatus {
  type: typeof PreferencesTypesEnum.SET_LOADER_STATUS
  payload: LoaderStatusEnum
}

export interface IClearPreferencesState {
  type: typeof PreferencesTypesEnum.CLEAR_PREFERENCES_STATE
}

/**
 * Actions type
 */

export type PreferencesActionsType =
ISetTheme |
ISetPreferencesLoaderStatus |
IClearPreferencesState |
ISetThemeStore
