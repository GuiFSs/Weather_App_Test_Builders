import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { SafeArea } from '~/core/styles/SafeArea';
import Background from '~/core/components/Background';
import LoadingModal from '~/core/components/LoadingModal';
import Storage from '~/core/utils/Storage';
import { ThemeTitleEnum } from '~/core/interfaces/theme';
import { darkTheme, lightTheme } from '~/core/styles/theme';
import PreferencesActions from '~/stores/ducks/preferences/actions';
import { AppStateType } from '~/stores';
import { LoaderStatusEnum } from '~/core/enums/loaderStatus';

const SplashScreen: React.FC<DrawerScreenProps<any, any>> = ({ navigation }) => {
  const dispatch = useDispatch();

  const { loaderStatus } = useSelector((state: AppStateType) => state.preferences);

  useEffect(() => {
    const getThemeFromStorageAndSet = async () => {
      const themeTitle = await Storage.get<ThemeTitleEnum>('theme');
      let themeToSet = darkTheme;
      if (themeTitle === null) {
        // if there isn't a theme at local storage, set one
        dispatch(PreferencesActions.setTheme(themeToSet));
      } else {
        // if there is a theme at local storage, just set on redux store
        switch (themeTitle) {
          case ThemeTitleEnum.dark:
            themeToSet = darkTheme;
            break;
          case ThemeTitleEnum.light:
            themeToSet = lightTheme;
            break;
          default:
            themeToSet = darkTheme;
        }
        dispatch(PreferencesActions.setThemeStore(themeToSet));
        dispatch(PreferencesActions.setLoaderStatus(LoaderStatusEnum.loaded));
      }
      navigation.navigate('Home');
    };
    getThemeFromStorageAndSet();
  }, [dispatch, navigation]);

  const loading = useMemo(() => loaderStatus === LoaderStatusEnum.initial, [loaderStatus]);

  return (
    <SafeArea>
      <Background />
      <LoadingModal loading={loading} />
    </SafeArea>
  );
};

export default SplashScreen;
