import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { hexToRgba } from '../../../../core/utils/helperFunctions';
import { ThemeText } from '../../../../core/styles/ThemeText';
import { IIconProps } from './types';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WeatherIconView = styled.View`
  margin-right: 10px;
  background-color: ${({ theme }) => hexToRgba(theme.colors.text, 0.5)};
  border-radius: 60px;
`;

export const WeatherIcon = styled.Image<IIconProps>`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  color: ${({ theme }) => theme.colors.primary};
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
