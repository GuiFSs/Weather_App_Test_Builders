import { DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import React, { useMemo } from 'react';
import { Switch } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, ItemText, ItemView, AppVersion,
} from './styles';
import { AppStateType } from '~/stores';
import { ThemeTitleEnum } from '~/core/interfaces/theme';
import { darkTheme, lightTheme } from '~/core/styles/theme';
import PreferencesActions from '~/stores/ducks/preferences/actions';

const DrawerContent: React.FC<DrawerContentComponentProps<DrawerContentOptions>> = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: AppStateType) => state.preferences);
  const isDarkMode = useMemo(() => theme.title === ThemeTitleEnum.dark, [theme.title]);

  function onChangeTheme(isDark:boolean) {
    const newTheme = isDark ? darkTheme : lightTheme;
    dispatch(PreferencesActions.setTheme(newTheme));
  }

  const appVersion = useMemo(() => DeviceInfo.getVersion(), []);

  return (
    <Container>
      <ItemView>
        <ItemText>
          Tema dark
        </ItemText>
        <Switch
          trackColor={{ false: 'gray', true: theme.colors.primary }}
          thumbColor={isDarkMode ? '#FFF' : '#333'}
          value={isDarkMode}
          onValueChange={onChangeTheme}
        />
      </ItemView>
      <AppVersion>
        {`Versão: ${appVersion}`}
      </AppVersion>
    </Container>
  );
};

export default DrawerContent;
