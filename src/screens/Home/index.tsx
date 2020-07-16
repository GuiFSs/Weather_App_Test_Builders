import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import Header from '../../core/components/Header';
import WeatherActions from '../../stores/ducks/weather/actions';
import { SafeArea } from './styles';
import TopSection from './components/TopSection';
import { AppStateType } from '../../stores';
import { BarStyleType } from '../../core/types/BarStyle';
import { ThemeTitleEnum } from '../../core/interfaces/theme';
import { useGeolocation } from '../../core/hooks/useGeolocation';
import { LoaderStatusEnum } from '../../core/enums/loaderStatus';
import LoadingModal from '../../core/components/LoadingModal';

const Home = () => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state: AppStateType) => state.preferences);
  const { loaderStatus: weatherLoader } = useSelector((state: AppStateType) => state.weather);

  const {
    coords, getGeolocation,
  } = useGeolocation();

  useEffect(() => {
    getGeolocation();
  }, [getGeolocation]);

  useEffect(() => {
    if (!coords) return;
    dispatch(WeatherActions.getWeatherByCoord({
      coord: coords,
    }));
  }, [dispatch, coords]);

  const barStyle = useMemo(() => {
    let style: BarStyleType = 'light-content';
    if (theme.title === ThemeTitleEnum.light) {
      style = 'dark-content';
    }
    return style;
  }, [theme.title]);

  const loading = useMemo(() => weatherLoader === LoaderStatusEnum.loading, [weatherLoader]);

  return (
    <SafeArea>
      <LoadingModal loading={loading} />
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={barStyle}
      />
      <Header />
      <TopSection />
    </SafeArea>
  );
};

export default Home;
