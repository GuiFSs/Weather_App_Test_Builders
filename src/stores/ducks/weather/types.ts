import { LoaderStatusEnum } from '../../../core/enums/loaderStatus';
import { IOpenWeatherModel } from '../../../services/models/OpenWeatherModel';
import { IGetWeatherByCoordParams } from '../../../services/interfaces/GetWeatherByCoordParams';

/**
 * Types definitions
 */

export enum WeatherTypesEnum {
  GET_WEATHER_BY_COORD_TRIGGER = 'weather/GET_WEATHER_BY_COORD_TRIGGER',

  SET_WEATHER = 'weather/SET_WEATHER',
  SET_LOADER_STATUS = 'weather/SET_LOADER_STATUS',

  CLEAR_WEATHER_STATE = 'weather/CLEAR_WEATHER_STATE',
}

/**
 * State interface
 */
export interface IWeatherState {
  readonly data: IOpenWeatherModel | null
  readonly loaderStatus: LoaderStatusEnum
}

/**
 * Actions types interfaces
 */
export interface IGetWeatherByCoordTrigger {
  type: typeof WeatherTypesEnum.GET_WEATHER_BY_COORD_TRIGGER,
  payload: IGetWeatherByCoordParams
}

export interface ISetWeather {
  type: typeof WeatherTypesEnum.SET_WEATHER
  payload: IOpenWeatherModel | null
}

export interface ISetLoaderStatus {
  type: typeof WeatherTypesEnum.SET_LOADER_STATUS
  payload: LoaderStatusEnum
}

export interface IClearWeatherState {
  type: typeof WeatherTypesEnum.CLEAR_WEATHER_STATE
}

/**
 * Actions type
 */

export type WeatherActionsType =
IGetWeatherByCoordTrigger |
ISetWeather |
ISetLoaderStatus|
IClearWeatherState
