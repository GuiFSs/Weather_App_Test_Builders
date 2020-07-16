import React from 'react';

import { Container, Title, MenuIcon } from './styles';

const Header = () => (
  <Container>
    <MenuIcon
      name="bar-chart-2"
      size={80}
    />
    <Title>
      Clima
    </Title>
  </Container>
);

export default Header;
