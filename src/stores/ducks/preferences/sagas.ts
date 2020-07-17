import { Alert } from 'react-native';
import { takeLatest, put } from 'redux-saga/effects';
import { PreferencesTypesEnum, ISetTheme } from './types';
import PreferencesActions from './actions';
import { LoaderStatusEnum } from '~/core/enums/loaderStatus';
import Storage from '~/core/utils/Storage';

function* setTheme({ payload }: ISetTheme) {
  console.log('SALVOU');
  yield put(PreferencesActions.setLoaderStatus(LoaderStatusEnum.loading));
  try {
    yield put(PreferencesActions.setThemeStore(payload));
    const { title } = payload;
    yield Storage.save('theme', title);
  } catch (err) {
    Alert.alert('Erro ao setar tema');
  } finally {
    yield put(PreferencesActions.setLoaderStatus(LoaderStatusEnum.loaded));
  }
}

export default function* preferencesSaga() {
  yield takeLatest(PreferencesTypesEnum.SET_THEME, setTheme);
}
