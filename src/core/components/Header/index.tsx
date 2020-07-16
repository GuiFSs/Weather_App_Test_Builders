import React from 'react';

import { Container, Title, MenuIcon } from './styles';
import { CustomTouchableOpacity } from '../../styles/CustomTouchableOpacity';
import { IProps } from './types';

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
