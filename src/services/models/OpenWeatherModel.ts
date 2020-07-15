export interface IOpenWeatherModel {
  coord: ICoord
  weather: IWeather[]
  base: string
  main: IMain
  wind: IWind
  clouds: IClouds
  dt: number
  sys: ISys
  timezone: number
  id: number
  name: string
  cod: number
}

export interface IClouds {
  all: number
}

export interface ICoord {
  lon: number
  lat: number
}

export interface IMain {
  temp: number
  feelsLike: number
  tempMin: number
  tempMax: number
  pressure: number
  humidity: number
}

export interface ISys {
  type: number
  id: number
  message: number
  country: string
  sunrise: number
  sunset: number
}

export interface IWeather {
  id: number
  main: string
  description: string
  icon: string
}

export interface IWind {
  speed: number
  deg: number
}
