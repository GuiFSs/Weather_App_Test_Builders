import React from 'react';
import { Modal } from 'react-native';

import { IProps } from './types';

const CustomModal: React.FC<IProps> = ({ children, visible }) => (
  <Modal
    animated
    animationType="fade"
    visible={visible}
    transparent
  >
    {children}
  </Modal>
);

export default CustomModal;
