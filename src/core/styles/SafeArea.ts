import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding: 5px 15px;
  background-color: ${({ theme }) => theme.colors.background};
`;
