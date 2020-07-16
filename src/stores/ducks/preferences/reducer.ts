import { Reducer } from 'redux';
import { IPreferencesState, PreferencesActionsType, PreferencesTypesEnum } from './types';
import { LoaderStatusEnum } from '../../../core/enums/loaderStatus';
import lightTheme from '../../../core/styles/themes/lightTheme';

const INITIAL_STATE: IPreferencesState = {
  theme: lightTheme,
  loaderStatus: LoaderStatusEnum.initial,
};

const preferencesReducer: Reducer<IPreferencesState, PreferencesActionsType> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case PreferencesTypesEnum.SET_THEME:
      return { ...state, theme: action.payload };
    case PreferencesTypesEnum.SET_LOADER_STATUS: {
      return { ...state, loaderStatus: action.payload };
    }
    case PreferencesTypesEnum.CLEAR_PREFERENCES_STATE:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

export default preferencesReducer;
