import styled, { css } from 'styled-components';
import type { ButtonProps } from './Button';
import { typo } from '@/app/styles';

const getPaddingWithIcon = (icon?: React.ReactElement) => css`
  padding: ${icon ? '0.8rem 2.4rem 0.8rem 2rem' : '0.8rem 2.4rem'};
  gap: ${icon ? '0.4rem' : '0'};
`;

const commonHoverStyles = css`
  &:hover {
    border: 0.08rem solid ${({ theme }) => theme.color.GRAY_30};
    background-color: ${({ theme }) => theme.color.BLUE_30};
  }
`;

const commonActiveStyles = css`
  &:active {
    background-color: ${({ theme }) => theme.color.PRIMARY_BLUE};
    color: ${({ theme }) => theme.color.WHITE};
  }
`;

export const buttonStyling = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  white-space: nowrap;
  cursor: pointer;

  svg {
    width: 2.2rem;
    height: 2.2rem;
    display: block;
    margin: auto;
  }
`;

export const variantStyles = (variant: Required<ButtonProps>['variant']) => {
  const style = {
    primary: css<{ icon?: React.ReactElement }>`
      ${typo.BODY_SEMIBOLD};
      border: 0.1rem solid transparent;
      border-radius: 0.8rem;
      background-color: ${({ theme }) => theme.color.PRIMARY_BLUE};
      color: ${({ theme }) => theme.color.WHITE};
      ${({ icon }) => getPaddingWithIcon(icon)}

      &:hover {
        background-color: ${({ theme }) => theme.color.BLUE_30};
        color: ${({ theme }) => theme.color.PRIMARY_BLUE};
        border: 0.1rem solid ${({ theme }) => theme.color.PRIMARY_BLUE};
      }

      &:active {
        background-color: ${({ theme }) => theme.color.WHITE};
        color: ${({ theme }) => theme.color.PRIMARY_BLUE};
        border: 0.1rem solid ${({ theme }) => theme.color.PRIMARY_BLUE};
      }
    `,
    circle: css`
      border-radius: 50%;
      flex-shrink: 0;
    `,
    inactivePrimary: css`
      ${typo.BODY_SEMIBOLD};
      padding: 0.8rem 2.4rem;
      border-radius: 0.8rem;
      background-color: ${({ theme }) => theme.color.WHITE};
      color: ${({ theme }) => theme.color.PRIMARY_BLUE};
      border: 0.1rem solid ${({ theme }) => theme.color.PRIMARY_BLUE};
      pointer-events: none;
    `,
    inactiveSecondary: css`
      ${typo.BODY_SEMIBOLD};
      padding: 0.8rem 2.4rem;
      border-radius: 0.8rem;
      background-color: ${({ theme }) => theme.color.BLUE_30};
      color: ${({ theme }) => theme.color.GRAY_50};
      border: 0.1rem solid ${({ theme }) => theme.color.BLUE_50};
      pointer-events: none;
    `,
  };

  return style[variant];
};

export const sizeByVariantStyles = (
  variant: Required<ButtonProps>['variant'],
  size: Required<ButtonProps>['size'],
) => {
  const style = {
    primary: {
      sm: css``,
      lg: css`
        min-width: 16.8rem;
      `,
    },
    circle: {
      sm: css`
        width: 3.2rem;
        height: 3.2rem;
        background-color: ${({ theme }) => theme.color.WHITE};
        color: ${({ theme }) => theme.color.BLUE_50};
        ${commonHoverStyles}
        ${commonActiveStyles}

        svg {
          width: 2rem;
          height: 2rem;
          flex-shrink: 0;
        }
      `,
      lg: css`
        width: 6.4rem;
        height: 6.4rem;
        border: 0.08rem solid ${({ theme }) => theme.color.GRAY_30};
        background-color: ${({ theme }) => theme.color.WHITE};
        filter: drop-shadow(0.08rem 0.08rem 0.64rem rgba(142, 152, 169, 0.25));
        ${commonHoverStyles}

        svg {
          width: 3.6rem;
          height: 3.6rem;
          flex-shrink: 0;
        }
      `,
    },
    inactivePrimary: {
      sm: css``,
      lg: css``,
    },
    inactiveSecondary: {
      sm: css``,
      lg: css``,
    },
  };

  return style[variant][size];
};

export const StyledButton = styled.button<ButtonProps>`
  ${buttonStyling};
  ${({ variant }) => variantStyles(variant)};
  ${({ variant, size }) => sizeByVariantStyles(variant, size)};
`;
