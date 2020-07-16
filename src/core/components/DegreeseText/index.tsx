import React from 'react';
import {
  Container, Unit, Degrees,
} from './styles';
import { IProps } from './types';

const DegreesText: React.FC<IProps> = ({
  degrees, degreesTextSize, aligned, unitTextSize,
}) => (
  <Container>
    <Degrees
      degreesTextSize={degreesTextSize}
    >
      {degrees}
    </Degrees>
    <Unit
      unitTextSize={unitTextSize}
      aligned={aligned}
    >
      ºC
    </Unit>
  </Container>
);

export default DegreesText;
