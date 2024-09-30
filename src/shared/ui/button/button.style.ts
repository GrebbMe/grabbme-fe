import { css, styled } from 'styled-components';
import { ButtonProps } from '@/shared/types/ButtonProps';

const buttonState = {
  default: css`
    color: white;

    svg {
      color: ${({ theme }) => theme.color.WHITE};
    }

    &:active {
      background-color: ${({ theme }) => theme.color.WHITE};
      color: ${({ theme }) => theme.color.PRIMARY_BLUE};
      border: 0.1rem solid ${({ theme }) => theme.color.PRIMARY_BLUE};
      svg {
        color: ${({ theme }) => theme.color.PRIMARY_BLUE};
      }
    }
  `,
  clicked: css`
    background-color: ${({ theme }) => theme.color.WHITE};
    color: ${({ theme }) => theme.color.PRIMARY_BLUE};

    svg {
      color: ${({ theme }) => theme.color.PRIMARY_BLUE};
    }
  `,
};

const StyledButton = styled.button<ButtonProps>`
  border: 0.1rem solid ${({ theme }) => theme.color.PRIMARY_BLUE};
  background-color: ${({ theme }) => theme.color.PRIMARY_BLUE};
  color: white;
  ${({ theme }) => theme.color.PRIMARY_BLUE};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  height: 3.8rem;
  border-radius: 0.8rem;
  white-space: nowrap;
  cursor: pointer;
  width: ${({ size }) => size};
  ${({ theme }) => theme.typo.BODY_SEMIBOLD};

  &:hover {
    background-color: ${({ theme }) => theme.color.BLUE_30};
    color: ${({ theme }) => theme.color.PRIMARY_BLUE};
    border: 0.1rem solid ${({ theme }) => theme.color.PRIMARY_BLUE};
    svg {
      color: ${({ theme }) => theme.color.PRIMARY_BLUE};
    }
  }

  ${({ state }) => buttonState[state]};
`;

export { StyledButton };
