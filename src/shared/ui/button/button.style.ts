import { ReactNode } from 'react';
import { css, styled } from 'styled-components';

interface ButtonProps {
  type: 'recruitcompleted' | 'default' | 'aplycompleted';
  isThin?: boolean;
  children: ReactNode;
  width: string;
  onClick?: () => void;
}

const buttonStyles = {
  default: css`
    background-color: ${({ theme }) => theme.color.PRIMARY_BLUE};
    color: white;
    border: 0.1375rem solid ${({ theme }) => theme.color.PRIMARY_BLUE};
    &:hover {
      background-color: ${({ theme }) => theme.color.BLUE_30};
      color: ${({ theme }) => theme.color.PRIMARY_BLUE};
      border-color: ${({ theme }) => theme.color.PRIMARY_BLUE};
    }
    &:active {
      background-color: ${({ theme }) => theme.color.WHITE};
      color: ${({ theme }) => theme.color.PRIMARY_BLUE};
      border: 0.1375rem solid ${({ theme }) => theme.color.PRIMARY_BLUE};
    }
  `,
  aplycompleted: css`
    background-color: ${({ theme }) => theme.color.WHITE};
    color: ${({ theme }) => theme.color.PRIMARY_BLUE};
    border: 0.1375rem solid ${({ theme }) => theme.color.PRIMARY_BLUE};
  `,
  recruitcompleted: css`
    background-color: ${({ theme }) => theme.color.BLUE_30};
    border: 0.1375rem solid ${({ theme }) => theme.color.BLUE_50};
    color: ${({ theme }) => theme.color.GRAY_50};
  `,
};

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 2.4rem;
  height: 3.8rem;
  border-radius: 0.8rem;
  white-space: nowrap;
  width: ${({ width }) => width};
  ${({ theme }) => theme.typo.BODY_SEMIBOLD};
  ${({ type }) => buttonStyles[type]};
  border-width: ${({ isThin }) => (isThin ? '0.1rem' : '0.1375rem')};
`;

export { StyledButton };
