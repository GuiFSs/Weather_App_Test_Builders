import { all } from 'redux-saga/effects';
import weatherSaga from './weather/sagas';
import preferencesSaga from './preferences/sagas';

export default function* rootSaga() {
  return yield all([
    preferencesSaga(),
    weatherSaga(),
  ]);
}
