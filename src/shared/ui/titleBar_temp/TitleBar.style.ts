import { styled } from 'styled-components';
import type { TitleBarSize } from '@/shared/ui/titleBar_temp/TitleBar';

export const Header = styled.div<{ $size: TitleBarSize }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
  width: ${({ $size }) => ($size === 'lg' ? '80.8rem' : '27.9rem')};
`;

export const Text = styled.label`
  color: ${({ theme }) => theme.color.BLACK_80};
  ${({ theme }) => theme.typo.BODY_SEMIBOLD};
`;

export const Count = styled.span`
  color: ${({ theme }) => theme.color.GRAY_50};
  ${({ theme }) => theme.typo.CAPTION_12};
`;

export const StarWrapper = styled.span`
  color: ${({ theme }) => theme.color.POINT_PINK};
  ${({ theme }) => theme.typo.BODY_SEMIBOLD};
  margin-left: 0.4rem;
`;

export const Description = styled.span`
  margin-left: 0.8rem;
  ${({ theme }) => theme.typo.CAPTION_12};
  color: ${({ theme }) => theme.color.GRAY_50};
`;
