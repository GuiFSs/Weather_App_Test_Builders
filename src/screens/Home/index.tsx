import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import WeatherActions from '../../stores/ducks/weather/actions';
import Header from '../../core/components/Header';

import { SafeArea } from './styles';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(WeatherActions.getWeatherByCoord({
      coord: {
        lat: 35,
        lon: 139,
      },
    }));
  }, [dispatch]);

  return (
    <SafeArea>
      <Header />
    </SafeArea>
  );
};

export default Home;
