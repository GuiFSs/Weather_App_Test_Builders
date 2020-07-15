import { ICoord } from '../models/OpenWeatherModel';

export interface IGetWeatherByCoordParams {
  units?: WeatherUnitEnum
  lang?: string
  coord: ICoord
}

/**
 * @imperial For temperature in Fahrenheit use units=imperial
 * @metric For temperature in Celsius use units=metric
*/
export enum WeatherUnitEnum {
  imperial = 'imperial',
  metric = 'metric'
}
