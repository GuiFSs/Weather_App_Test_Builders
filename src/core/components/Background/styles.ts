import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  position: absolute;
  justify-content: center;
  z-index: 0;
  width: 100%;
  height: 100%;
`;

export const Cloud1 = styled.Image`
  width: ${RFValue(200)}px;
  width: ${RFValue(200)}px;
  opacity: 0.6;
  top: 5%;
  left: -25%;
  position: absolute;
`;

export const Cloud2 = styled.Image`
  width: ${RFValue(145)}px;
  width: ${RFValue(145)}px;
  opacity: 0.6;
  top: -5%;
  right: -30%;
  position: absolute;
`;
export const Cloud3 = styled.Image`
  width: ${RFValue(65)}px;
  width: ${RFValue(65)}px;
  opacity: 0.6;
  top: 20%;
  right: -10%;
  position: absolute;
`;
