import styled from 'styled-components';
import type { StatusTagProps } from './StatusTag';

const statusColors = {
  rejected: {
    background: 'LIGHT_PINK',
    circle: 'POINT_PINK',
    label: 'POINT_PINK',
  },
  accepted: {
    background: 'BLUE_30',
    circle: 'PRIMARY_BLUE',
    label: 'PRIMARY_BLUE',
  },
  pending: {
    background: 'GRAY_30',
    circle: 'GRAY_50',
    label: 'BLACK_80',
  },
  default: {
    background: 'GRAY_30',
    circle: 'GRAY_50',
    label: 'BLACK_80',
  },
};

export const TagContainer = styled.div<StatusTagProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  border-radius: 2rem;
  gap: 0.4rem;
  min-width: 6.4rem;
  flex-shrink: 0;
  background-color: ${({ theme, status }) =>
    theme.color[statusColors[status]?.background || statusColors.default.background]};
`;

export const Circle = styled.div<StatusTagProps>`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background-color: ${({ theme, status }) =>
    theme.color[statusColors[status]?.circle || statusColors.default.circle]};
`;

export const TagLabel = styled.span<StatusTagProps>`
  color: ${({ theme, status }) =>
    theme.color[statusColors[status]?.label || statusColors.default.label]};
  ${({ theme }) => theme.typo.CAPTION_10};
`;
