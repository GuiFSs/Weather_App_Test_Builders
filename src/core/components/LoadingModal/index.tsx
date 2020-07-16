import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSelector } from 'react-redux';
import { AppStateType } from '~/stores';
import CustomModal from '../CustomModal';
import { Container, Loader } from './styles';
import { IProps } from './types';

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
