import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Entypo';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
`;

export const Title = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(22)}px;
  text-align: center;
  font-weight: bold;
`;

export const MenuIcon = styled(Icon)`
  font-size: ${RFValue(35)}px;
  color: ${({ theme }) => theme.colors.text};
`;
