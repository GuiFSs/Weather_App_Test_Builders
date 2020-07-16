import React, { useMemo } from 'react';

import { useSelector } from 'react-redux';
import {
  Container,
  FeelsLikeView,
  Text,
} from './styles';
import DateWithIcon from '../DateWithIcon';
import { formatDate, firstLetterToUpperCase, getFormattedDegrees } from '../../../../core/utils/helperFunctions';
import DegreesText from '../../../../core/components/DegreeseText';
import Dot from '../../../../core/components/Dot';
import { AppStateType } from '../../../../stores';

const TopSection = () => {
  const { data: weatherData } = useSelector((state: AppStateType) => state.weather);

  const { todayDate, time } = useMemo(() => {
    const dateNow = new Date();
    let _todayDate = formatDate(dateNow, 'iii, dd MMMM');
    // captalizing the first letters of date
    const todayArray = _todayDate.split(' ').map((str) => firstLetterToUpperCase(str));
    _todayDate = todayArray.join(' ');

    return {
      todayDate: _todayDate,
      time: formatDate(dateNow, 'hh:mm'),
    };
  }, [weatherData]);

  const {
    degrees, location, feelsLike, weatherDescription, weatherIcon,
  } = useMemo(() => {
    let _location = '';
    let _degrees = '';
    let _feelsLike = '';
    let _weatherDescription = '';
    let _weatherIcon = '';
    if (weatherData) {
      const {
        main, sys, weather, name,
      } = weatherData;
      const { temp, feels_like } = main;
      const currentWeather = weather[0];
      _weatherIcon = currentWeather.icon;
      _weatherDescription = currentWeather?.description || '';
      _weatherDescription = firstLetterToUpperCase(_weatherDescription);
      _feelsLike = getFormattedDegrees(feels_like);
      _degrees = getFormattedDegrees(temp);
      _location = `${name}, ${sys.country}`;
    }

    return {
      location: _location,
      feelsLike: _feelsLike,
      degrees: _degrees,
      weatherDescription: _weatherDescription,
      weatherIcon: _weatherIcon,
    };
  }, [weatherData]);

  return (
    <Container>
      <DateWithIcon
        date={todayDate}
        icon={weatherIcon}
      />
      <DegreesText
        degrees={degrees}
        aligned={false}
        degreesTextSize={70}
      />
      <Text>
        {location}
      </Text>
      <FeelsLikeView>
        <Text>
          {'Sensação térmica: '}
        </Text>
        <DegreesText
          degrees={feelsLike}
          aligned
          degreesTextSize={14}
          unitTextSize={14}
          bold={false}
        />
        <Dot />
        <Text>
          {`${weatherDescription} ${time}`}
        </Text>
      </FeelsLikeView>
    </Container>
  );
};

export default TopSection;
