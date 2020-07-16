import { all } from 'redux-saga/effects';
import weatherSaga from './weather/sagas';

export default function* rootSaga() {
  return yield all([
    yield weatherSaga(),
  ]);
}
