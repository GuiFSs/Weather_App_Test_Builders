import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { ThemeText } from '../../../../core/styles/ThemeText';

export const Container = styled.View`
  padding: 15px;
  align-items: center;
`;

export const FeelsLikeView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const Text = styled(ThemeText)`
  text-align: center;
  font-size: ${RFValue(14)}px;
  opacity: 0.75;
`;
