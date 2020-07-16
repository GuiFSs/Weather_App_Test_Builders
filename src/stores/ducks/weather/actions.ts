import {
  ISetWeather, WeatherTypesEnum, ISetLoaderStatus, IClearWeatherState, IGetWeatherByCoordTrigger,
} from './types';
import { IGetWeatherByCoordParams } from '~/services/interfaces/GetWeatherByCoordParams';
import { action } from '~/stores/helpers/actionHelper';
import { IOpenWeatherModel } from '~/services/models/OpenWeatherModel';
import { LoaderStatusEnum } from '~/core/enums/loaderStatus';

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
