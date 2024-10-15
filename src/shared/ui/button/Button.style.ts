import { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { typo } from '@/app/styles';

const paddingStyles = (icon?: ReactElement) => css`
  padding: ${icon ? '0.8rem 2.4rem 0.8rem 2rem' : '0.8rem 2.4rem'};
`;

export const StyledButton = styled.button<{ icon?: ReactElement }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${({ icon }) => paddingStyles(icon)};
  background-color: ${({ theme }) => theme.color.PRIMARY_BLUE};
  color: ${({ theme }) => theme.color.WHITE};
  border: 0.1rem solid transparent;
  border-radius: 0.8rem;
  cursor: pointer;
  box-sizing: border-box;
  flex-shrink: 0;
  ${typo.BODY_SEMIBOLD};

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

  &:disabled {
    background-color: ${({ theme }) => theme.color.BLUE_30};
    color: ${({ theme }) => theme.color.GRAY_50};
    border: 0.1rem solid ${({ theme }) => theme.color.BLUE_50};
    cursor: not-allowed;
  }
`;

export const IconWrapper = styled.div<{ iconType?: 'bookmark' | 'list' }>`
  display: inline-flex;
  margin-right: 0.4rem;
  width: 2.2rem;
  height: 2.2rem;

  svg {
    width: 100%;
    height: 100%;
  }

  ${StyledButton}:hover & svg {
    fill: ${({ iconType, theme }) => (iconType === 'list' ? theme.color.PRIMARY_BLUE : 'none')};
    stroke: ${({ iconType, theme }) =>
      iconType === 'bookmark' ? theme.color.PRIMARY_BLUE : 'none'};
  }

  ${StyledButton}:active & svg {
    fill: ${({ iconType, theme }) => theme.color.PRIMARY_BLUE};
    stroke: ${({ iconType, theme }) =>
      iconType === 'bookmark' ? theme.color.PRIMARY_BLUE : 'none'};
  }
`;
