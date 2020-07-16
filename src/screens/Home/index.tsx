import React, { useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
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
import BottomSection from './components/BottomSection';
import FloatButton from '../../core/components/FloatButton';
import Background from '../../core/components/Background';

const Home: React.FC<DrawerScreenProps<any, any>> = ({ navigation }) => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state: AppStateType) => state.preferences);
  const { loaderStatus: weatherLoader } = useSelector((state: AppStateType) => state.weather);

  const {
    coords, getGeolocation,
  } = useGeolocation();

  const getWeather = useCallback(() => {
    if (!coords) return;
    dispatch(WeatherActions.getWeatherByCoord({
      coord: coords,
    }));
  }, [dispatch, coords]);

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

  return (
    <SafeArea>
      <LoadingModal loading={loading} />
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={barStyle}
      />
      <Header
        onPressMenu={() => {
          console.log('--- WHY');
          navigation.openDrawer();
        }}
      />
      <TopSection />
      <BottomSection />
      <FloatButton
        onPress={getWeather}
      />
      <Background />
    </SafeArea>
  );
};

export default Home;
