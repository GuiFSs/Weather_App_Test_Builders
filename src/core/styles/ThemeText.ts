import styled from 'styled-components/native';

export const ThemeText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Montserrat';
`;
