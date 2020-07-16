import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';
import { CustomTouchableOpacity } from '../../styles/CustomTouchableOpacity';

export const Button = styled(CustomTouchableOpacity)`
  position: absolute;
  bottom: 30px;
  right: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 60px;
  elevation: 10;
  z-index: 1;
`;

export const ReloadIcon = styled(Icon)`
  font-size: ${RFValue(30)}px;
  color: #FFF;
`;
