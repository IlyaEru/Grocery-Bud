import styled from 'styled-components';
import { StyledMainHeading, StyledSection } from './globalStyle';

export const StyledMain = styled(StyledSection).attrs({
  as: 'main',
})`
  padding: 2rem;
  max-width: 40rem;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.lightShadow};
  .event-message {
    text-align: center;
    margin: 1rem 0;
    padding: 0.2rem 0;
    background-color: ${({ theme }) => theme.colors.lightGreen};
    border-radius: ${({ theme }) => theme.borderRadius};
    &.warning-message {
      background-color: ${({ theme }) => theme.colors.lightRed};
    }
  }
`;
export const StyledHero = styled(StyledMainHeading)`
  font-size: 1.5rem;
`;

export const StyledForm = styled.form`
  display: flex;
  input {
    flex: 1;
    padding: 0.25rem 0.25rem 0.25rem 1rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    font-size: 1.25rem;
    border-radius: 0.25rem 0 0 0.25rem;
    min-width: 1px;
  }
  button {
    padding: 0.25rem 1rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.primaryLightBlue};
    border-radius: 0 0.25rem 0.25rem 0;
    text-transform: capitalize;
    letter-spacing: 2px;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryBlue};
      color: ${({ theme }) => theme.colors.white};
      transition: ${({ theme }) => theme.transition};
    }
  }
`;

export const StyledClearButton = styled.button`
  color: ${({ theme }) => theme.colors.red};
  cursor: pointer;
  background: none;
  border: none;
  text-transform: capitalize;
  display: flex;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  margin: 1.25rem auto 0;
  transition: ${({ theme }) => theme.transition};
  &:hover {
    color: ${({ theme }) => theme.colors.darkRed};
  }
`;
