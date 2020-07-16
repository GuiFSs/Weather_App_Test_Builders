import React from 'react';
import {
  Container, Cloud1, Cloud2, Cloud3,
} from './styles';
import images from '~/assets';

const Background = () => (
  <Container>
    <Cloud1
      source={images.CLOUD_1}
      resizeMode="contain"
    />
    <Cloud2
      source={images.CLOUD_1}
      resizeMode="contain"
    />
    <Cloud3
      source={images.CLOUD_2}
      resizeMode="contain"
    />
  </Container>
);

export default Background;
