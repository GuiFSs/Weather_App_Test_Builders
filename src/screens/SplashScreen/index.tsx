import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { SafeArea } from '~/core/styles/SafeArea';
import Background from '~/core/components/Background';
import LoadingModal from '~/core/components/LoadingModal';
import Storage from '~/core/utils/Storage';
import { ThemeTitleEnum } from '~/core/interfaces/theme';
import { darkTheme, lightTheme } from '~/core/styles/theme';
import PreferencesActions from '~/stores/ducks/preferences/actions';

const SplashScreen: React.FC<DrawerScreenProps<any, any>> = ({ navigation }) => {
  const dispatch = useDispatch();

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
      }
    };
    getThemeFromStorageAndSet();

    navigation.navigate('Home');
  }, [dispatch, navigation]);

  return (
    <SafeArea>
      <Background />
      <LoadingModal loading={false} />
    </SafeArea>
  );
};

export default SplashScreen;
