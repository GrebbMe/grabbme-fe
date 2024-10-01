import { css, styled } from 'styled-components';
import { CompletedButtonProps } from '@/shared/ui/button/CompletedButton';

const completedVariant = {
  apply: css`
    background-color: ${({ theme }) => theme.color.WHITE};
    color: ${({ theme }) => theme.color.PRIMARY_BLUE};
    border: 0.1rem solid ${({ theme }) => theme.color.PRIMARY_BLUE};
  `,
  recruit: css`
    background-color: ${({ theme }) => theme.color.BLUE_30};
    border: 0.1rem solid ${({ theme }) => theme.color.BLUE_50};
    color: ${({ theme }) => theme.color.GRAY_50};
  `,
};

export const StyledButton = styled.button<CompletedButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10.8rem;
  height: 3.8rem;
  border-radius: 0.8rem;
  ${({ theme }) => theme.typo.BODY_SEMIBOLD};
  ${({ variant }) => completedVariant[variant]};
`;
