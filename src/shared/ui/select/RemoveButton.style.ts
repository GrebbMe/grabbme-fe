import { styled } from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  box-sizing: border-box;
  flex-shrink: 0;
  cursor: pointer;
  ${({ theme }) => theme.typo.CAPTION_14};
  border: 0.1rem solid transparent;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.color.BLUE_30};
  color: ${({ theme }) => theme.color.BLACK_80};
  gap: 0.2rem;
  white-space: nowrap;
  stroke: ${({ theme }) => theme.color.BLUE_50};
  height: 2.8rem;

  svg {
    color: ${({ theme }) => theme.color.BLUE_50};
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.BLUE_30};
    border: 0.1rem solid ${({ theme }) => theme.color.PRIMARY_BLUE};
    color: ${({ theme }) => theme.color.PRIMARY_BLUE};
    stroke: ${({ theme }) => theme.color.PRIMARY_BLUE};
    height: 2.8rem;
    svg {
      color: ${({ theme }) => theme.color.PRIMARY_BLUE};
    }
  }
`;
