import styled from 'styled-components';
import { StyledContainer } from './globalStyle';

export const StyledWrapper = styled(StyledContainer)`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  min-height: 100vh;
  padding-top: 6rem;
`;
