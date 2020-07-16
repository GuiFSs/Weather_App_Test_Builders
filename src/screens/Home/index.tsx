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

const Home = () => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state: AppStateType) => state.preferences);

  useEffect(() => {
    dispatch(WeatherActions.getWeatherByCoord({
      coord: {
        lat: 35,
        lon: 139,
      },
    }));
  }, [dispatch]);

  const barStyle = useMemo(() => {
    let style: BarStyleType = 'light-content';
    if (theme.title === ThemeTitleEnum.light) {
      style = 'dark-content';
    }
    return style;
  }, [theme.title]);

  return (
    <SafeArea>
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
