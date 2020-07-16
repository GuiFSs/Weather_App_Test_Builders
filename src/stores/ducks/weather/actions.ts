import { IOpenWeatherModel } from '../../../services/models/OpenWeatherModel';
import {
  ISetWeather, WeatherTypesEnum, ISetLoaderStatus, IClearWeatherState, IGetWeatherByCoordTrigger,
} from './types';
import { action } from '../../helpers/actionHelper';
import { LoaderStatusEnum } from '../../../core/enums/loaderStatus';
import { IGetWeatherByCoordParams } from '../../../services/interfaces/GetWeatherByCoordParams';

const WeatherActions = {
  getWeatherByCoord: (
    payload: IGetWeatherByCoordParams,
  ): IGetWeatherByCoordTrigger => action(
    WeatherTypesEnum.GET_WEATHER_BY_COORD_TRIGGER,
    payload,
  ),

  setWeather: (
    payload: IOpenWeatherModel | null,
  ): ISetWeather => action(
    WeatherTypesEnum.SET_WEATHER,
    payload,
  ),

  setLoaderStatus: (
    payload: LoaderStatusEnum,
  ):ISetLoaderStatus => action(
    WeatherTypesEnum.SET_LOADER_STATUS,
    payload,
  ),

  clearState: (): IClearWeatherState => action(
    WeatherTypesEnum.CLEAR_WEATHER_STATE,
  ),
};

export default WeatherActions;
