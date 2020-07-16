import React, { useMemo } from 'react';

import {
  Container,
  FeelsLikeView,
  Text,
} from './styles';
import DateWithIcon from '../DateWithIcon';
import { formatDate } from '../../../../core/utils/helperFunctions';
import DegreesText from '../../../../core/components/DegreeseText';
import Dot from '../../../../core/components/Dot';

const TopSection = () => {
  const { todayDate, time } = useMemo(() => {
    const dateNow = new Date();
    return {
      todayDate: formatDate(dateNow, 'iii, dd MMM'),
      time: formatDate(dateNow, 'HH:SS'),
    };
  }, []);
  const location = 'Barcelona, Spain';
  const feelsLike = 32;
  const degrees = 28;

  return (
    <Container>
      <DateWithIcon
        date={todayDate}
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
          {`Feels like ${feelsLike}`}
        </Text>
        <Dot />
        <Text>
          {`Sunset ${time}`}
        </Text>
      </FeelsLikeView>
    </Container>
  );
};

export default TopSection;
