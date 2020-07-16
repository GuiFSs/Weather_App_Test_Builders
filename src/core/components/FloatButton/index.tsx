import React from 'react';
import { Button, ReloadIcon } from './styles';
import { IProps } from './types';

const FloatButton: React.FC<IProps> = ({ onPress }) => (
  <Button onPress={onPress}>
    <ReloadIcon
      name="reload1"
    />
  </Button>
);

export default FloatButton;
