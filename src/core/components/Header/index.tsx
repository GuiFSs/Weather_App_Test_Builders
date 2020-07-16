import React from 'react';

import { Container, Title, MenuIcon } from './styles';

const Header = () => (
  <Container>
    <MenuIcon
      name="menu"
      size={80}
    />
    <Title>
      Clima
    </Title>
  </Container>
);

export default Header;
