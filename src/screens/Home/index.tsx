import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import WeatherActions from '../../stores/ducks/weather/actions';

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
    <SafeAreaView>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
