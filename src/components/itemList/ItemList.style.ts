import styled from 'styled-components';

export const StyledItemList = styled.section`
  padding-top: 2rem;
  ul {
    list-style: none;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.25rem 1rem;
      text-transform: capitalize;
      &:hover {
        transition: ${({ theme }) => theme.transition};
        background-color: ${({ theme }) => theme.colors.lightGrey};
      }
      .btn-container {
        display: flex;
        gap: 0.5rem;
        button {
          background: none;
          border: none;
          cursor: pointer;
          opacity: 0.6;
          transition: ${({ theme }) => theme.transition};
          &.edit-btn {
            color: ${({ theme }) => theme.colors.green};
          }
          &.delete-btn {
            color: ${({ theme }) => theme.colors.red};
          }
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
`;
