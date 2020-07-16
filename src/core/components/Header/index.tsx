import React from 'react';

import { Container, Title, MenuIcon } from './styles';
import { IProps } from './types';
import { CustomTouchableOpacity } from '~/core/styles/CustomTouchableOpacity';

const Header: React.FC<IProps> = ({ onPressMenu }) => (
  <Container>
    <CustomTouchableOpacity
      onPress={onPressMenu}
    >
      <MenuIcon
        name="bar-chart-2"
        size={80}
      />
    </CustomTouchableOpacity>
    <Title>
      Clima
    </Title>
  </Container>
);

export default Header;
