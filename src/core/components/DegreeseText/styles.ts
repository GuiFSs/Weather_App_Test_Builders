import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { IUnitProps, IDegreesProps } from './types';
import { ThemeText } from '../../styles/ThemeText';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Degrees = styled(ThemeText)<IDegreesProps>`
  font-size: ${({ degreesTextSize = 55 }) => RFValue(degreesTextSize)}px;
  font-weight: bold;
`;

export const Unit = styled(ThemeText)<IUnitProps>`
  font-size: ${({ unitTextSize = 25 }) => RFValue(unitTextSize)}px;
  opacity: 0.8;
  margin-top: ${({ aligned }) => (aligned ? 0 : '-5%')};
  margin-left: 7px;
`;
