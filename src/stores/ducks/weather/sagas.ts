import { takeLatest, put, call } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { Alert } from 'react-native';
import { WeatherTypesEnum, IGetWeatherByCoordTrigger } from './types';
import WeatherActions from './actions';
import { LoaderStatusEnum } from '../../../core/enums/loaderStatus';
import { WeatherUnitEnum } from '../../../services/interfaces/GetWeatherByCoordParams';
import { IOpenWeatherModel } from '../../../services/models/OpenWeatherModel';
import callApi from '../../../services/api';
import { HttpMethodEnum } from '../../../services/interfaces/Request';

function* getWeatherByCoord({ payload }: IGetWeatherByCoordTrigger) {
  yield put(WeatherActions.setLoaderStatus(LoaderStatusEnum.loading));
  try {
    const { coord, lang, units } = payload;
    const { lat, lon } = coord;
    const params = {
      lat,
      lon,
      lang: lang || 'pt_br',
      units: units || WeatherUnitEnum.metric,
    };
    const { data }: AxiosResponse<IOpenWeatherModel> = yield call(callApi, {
      endpoint: '/weather',
      method: HttpMethodEnum.get,
      params,
    });
    yield put(WeatherActions.setWeather(data));
  } catch (err) {
    // TODO: maybe handle error in a better way
    // console.log('[getWeatherByCoord] ERROR:', err);
    Alert.alert('Erro ao buscar clima');
  } finally {
    yield put(WeatherActions.setLoaderStatus(LoaderStatusEnum.loaded));
  }
}

export default function* weatherSaga() {
  yield takeLatest(WeatherTypesEnum.GET_WEATHER_BY_COORD_TRIGGER, getWeatherByCoord);
}
