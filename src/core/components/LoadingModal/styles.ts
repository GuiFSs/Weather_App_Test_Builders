import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: rgba(0,0,0,.5);
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.ActivityIndicator`
  background-color: ${({ theme }) => theme.colors.text};
  padding: 10px;
  border-radius: 5px;
`;
