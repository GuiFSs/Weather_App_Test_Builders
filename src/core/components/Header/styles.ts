import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';
import { ThemeText } from '../../styles/ThemeText';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
`;

export const Title = styled(ThemeText)`
  flex: 1;
  font-size: ${RFValue(22)}px;
  text-align: center;
  font-weight: bold;
`;

export const MenuIcon = styled(Icon)`
  font-size: ${RFValue(35)}px;
  color: ${({ theme }) => theme.colors.text};
  transform: rotate(90deg);
`;
