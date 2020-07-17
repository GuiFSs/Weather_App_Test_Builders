import {
  ISetTheme,
  PreferencesTypesEnum,
  ISetPreferencesLoaderStatus,
  IClearPreferencesState,
  ISetThemeStore,
} from './types';
import { ITheme } from '~/core/interfaces/theme';
import { action } from '~/stores/helpers/actionHelper';
import { LoaderStatusEnum } from '~/core/enums/loaderStatus';

const PreferencesActions = {
  setTheme: (
    payload: ITheme,
  ): ISetTheme => action(
    PreferencesTypesEnum.SET_THEME,
    payload,
  ),

  /** set theme in redux store */
  setThemeStore: (
    payload: ITheme,
  ): ISetThemeStore => action(
    PreferencesTypesEnum.SET_THEME_STORE,
    payload,
  ),

  setLoaderStatus: (
    payload: LoaderStatusEnum,
  ): ISetPreferencesLoaderStatus => action(
    PreferencesTypesEnum.SET_LOADER_STATUS, payload,
  ),

  clearState: (): IClearPreferencesState => action(
    PreferencesTypesEnum.CLEAR_PREFERENCES_STATE,
  ),
};

export default PreferencesActions;
