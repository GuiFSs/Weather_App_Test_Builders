import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.text};
  width: ${RFValue(4)}px;
  height: ${RFValue(4)}px;
  border-radius: 30px;
  margin: 0 13px;
`;
