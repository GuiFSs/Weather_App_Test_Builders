import React from 'react';
import {
  Container,
  WeatherIcon,
  Today,
  DateText,
  DateView,
} from './styles';
import { IProps } from './types';

const DateWithIcon: React.FC<IProps> = ({ date }) => (
  <Container>
    <WeatherIcon
      name="weather-pouring"
    />
    <DateView>
      <Today>
        Hoje
      </Today>
      <DateText>
        {date}
      </DateText>
    </DateView>
  </Container>
);

export default DateWithIcon;
