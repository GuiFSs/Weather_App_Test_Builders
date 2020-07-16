import React from 'react';
import { Modal } from 'react-native';
import { useSelector } from 'react-redux';
import { RFValue } from 'react-native-responsive-fontsize';
import { IProps } from './types';

import { Container, Loader } from './styles';
import { AppStateType } from '../../../stores';
import CustomModal from '../CustomModal';

const LoadingModal: React.FC<IProps> = ({ loading }) => {
  const { theme } = useSelector((state: AppStateType) => state.preferences);
  return (
    <CustomModal
      visible={loading}
    >
      <Container>
        <Loader
          color={theme.colors.background}
          size={RFValue(40)}
        />
      </Container>
    </CustomModal>
  );
};

export default LoadingModal;
