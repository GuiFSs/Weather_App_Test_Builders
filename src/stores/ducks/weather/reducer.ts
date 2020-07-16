import { Reducer } from 'redux';
import { IWeatherState, WeatherActionsType, WeatherTypesEnum } from './types';
import { LoaderStatusEnum } from '../../../core/enums/storeState';

const INITIAL_STATE: IWeatherState = {
  data: null,
  loaderStatus: LoaderStatusEnum.initial,
};

const weatherReducer: Reducer<IWeatherState, WeatherActionsType> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case WeatherTypesEnum.SET_WEATHER:
      return { ...state, data: action.payload };
    case WeatherTypesEnum.SET_LOADER_STATUS:
      return { ...state, loaderStatus: action.payload };
    case WeatherTypesEnum.CLEAR_WEATHER_STATE:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

export default weatherReducer;
