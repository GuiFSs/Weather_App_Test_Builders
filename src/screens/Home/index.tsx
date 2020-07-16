import React, { useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { AppStateType } from '~/stores';
import { useGeolocation } from '~/core/hooks/useGeolocation';
import WeatherActions from '~/stores/ducks/weather/actions';
import { BarStyleType } from '~/core/types/BarStyle';
import { ThemeTitleEnum } from '~/core/interfaces/theme';
import { LoaderStatusEnum } from '~/core/enums/loaderStatus';
import { SafeArea } from './styles';
import TopSection from './components/TopSection';
import BottomSection from './components/BottomSection';
import Header from '~/core/components/Header';
import LoadingModal from '~/core/components/LoadingModal';
import FloatButton from '~/core/components/FloatButton';
import Background from '~/core/components/Background';

const Home: React.FC<DrawerScreenProps<any, any>> = ({ navigation }) => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state: AppStateType) => state.preferences);
  const { loaderStatus: weatherLoader, data } = useSelector((state: AppStateType) => state.weather);

  const {
    coords, getGeolocation, hasLocationPermission,
  } = useGeolocation();

  const getWeather = useCallback(() => {
    if (!hasLocationPermission) {
      getGeolocation();
      return;
    }
    if (!coords) return;
    dispatch(WeatherActions.getWeatherByCoord({
      coord: coords,
    }));
  }, [coords, hasLocationPermission, dispatch, getGeolocation]);

  useEffect(() => {
    getGeolocation();
  }, [getGeolocation]);

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  const barStyle = useMemo(() => {
    let style: BarStyleType = 'light-content';
    if (theme.title === ThemeTitleEnum.light) {
      style = 'dark-content';
    }
    return style;
  }, [theme.title]);

  const loading = useMemo(() => weatherLoader === LoaderStatusEnum.loading, [weatherLoader]);

  const showContent = useMemo(() => {
    switch (weatherLoader) {
      case LoaderStatusEnum.initial:
        return false;
      case LoaderStatusEnum.loading:
        if (data) return true;
        return false;
      case LoaderStatusEnum.loaded:
        return true;
      default:
        return true;
    }
  }, [weatherLoader, data]);

  return (
    <SafeArea>
      <Background />
      <LoadingModal loading={loading} />
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={barStyle}
      />
      <Header
        onPressMenu={() => navigation.openDrawer()}
      />
      {showContent && (
        <>
          <TopSection />
          <BottomSection />
        </>
      )}
      <FloatButton
        onPress={getWeather}
      />
    </SafeArea>
  );
};

export default Home;
