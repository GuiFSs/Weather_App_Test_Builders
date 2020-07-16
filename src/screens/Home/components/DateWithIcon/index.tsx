import React from 'react';
import {
  Container,
  WeatherIcon,
  Today,
  DateText,
  DateView,
  WeatherIconView,
} from './styles';
import { IProps } from './types';
import { getOpenWeatherIconUrl } from '~/core/utils/helperFunctions';

const DateWithIcon: React.FC<IProps> = ({ date, icon }) => (
  <Container>
    <WeatherIconView>
      <WeatherIcon
        source={{ uri: getOpenWeatherIconUrl(icon) }}
        icon={icon}
      />
    </WeatherIconView>
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
