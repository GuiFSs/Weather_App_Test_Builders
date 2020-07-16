import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { ThemeText } from '../../styles/ThemeText';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 25px 20px;
  justify-content: space-between;
`;

export const ItemView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const ItemText = styled(ThemeText)`
  font-size: ${RFValue(17)}px;
`;

export const AppVersion = styled(ThemeText)`
  font-size: ${RFValue(15)}px;
  font-weight: bold;
`;
