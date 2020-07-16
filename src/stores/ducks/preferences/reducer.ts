import { Reducer } from 'redux';
import { IPreferencesState, PreferencesActionsType, PreferencesTypesEnum } from './types';
import { darkTheme } from '~/core/styles/theme';
import { LoaderStatusEnum } from '~/core/enums/loaderStatus';

const INITIAL_STATE: IPreferencesState = {
  theme: darkTheme,
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
