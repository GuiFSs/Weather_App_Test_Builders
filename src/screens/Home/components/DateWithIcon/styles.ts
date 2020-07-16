import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import { ThemeText } from '../../../../core/styles/ThemeText';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WeatherIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  font-size: ${RFValue(25)}px;
  margin-right: 15px;
`;

export const DateView = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Today = styled(ThemeText)`
  font-size: ${RFValue(22)}px;
  font-weight: bold;
`;

export const DateText = styled(ThemeText)`
  font-size: ${RFValue(14)}px;
  margin-top: 4px;
  opacity: 0.75;
`;
