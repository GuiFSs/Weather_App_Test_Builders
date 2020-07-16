import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Fontisto';
import { IContainerProps, IWindDirectionProps } from './types';
import { LoaderStatusEnum } from '~/core/enums/loaderStatus';
import { ThemeText } from '~/core/styles/ThemeText';
import { hexToRgba } from '~/core/utils/helperFunctions';

export const Container = styled.View<IContainerProps>`
  display: ${({ loaderStatus }) => {
    switch (loaderStatus) {
      case LoaderStatusEnum.loading:
      case LoaderStatusEnum.initial:
        return 'none';
      case LoaderStatusEnum.loaded:
      default:
        return 'flex';
    }
  }};
`;

export const Title = styled(ThemeText)`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const Card = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px 10px;
  background-color: ${({ theme }) => theme.colors.text};
  elevation: 10;
  border-radius: 10px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const KeyValueView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  margin: 7px 12px;
`;

export const Key = styled(ThemeText)`
  color: ${({ theme }) => theme.colors.background};
  font-size: ${RFValue(16)}px;
  font-weight: bold;
`;

export const Value = styled(ThemeText)`
  color: ${({ theme }) => hexToRgba(theme.colors.background, 0.5)};
  font-size: ${RFValue(13)}px;
`;

export const WindDirectionIcon = styled(Icon)<IWindDirectionProps>`
  transform: rotate(${({ deg }) => deg}deg);
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => hexToRgba(theme.colors.background, 0.5)};
`;
