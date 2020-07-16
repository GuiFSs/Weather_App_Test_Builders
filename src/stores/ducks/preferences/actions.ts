import { ITheme } from '../../../core/interfaces/theme';
import {
  ISetTheme, PreferencesTypesEnum, ISetPreferencesLoaderStatus, IClearPreferencesState,
} from './types';
import { action } from '../../helpers/actionHelper';
import { LoaderStatusEnum } from '../../../core/enums/loaderStatus';

const PreferencesActions = {
  setTheme: (
    payload: ITheme,
  ): ISetTheme => action(
    PreferencesTypesEnum.SET_THEME, payload,
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
