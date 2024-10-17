import styled from 'styled-components';
import { typo } from '@/app/styles';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SidebarButton = styled.button<{ isActive: boolean }>`
  width: 26.4rem;
  height: 6.8rem;
  background-color: ${({ theme }) => theme.color.WHITE};
  color: ${({ isActive }) =>
    isActive ? ({ theme }) => theme.color.BLACK_100 : ({ theme }) => theme.color.GRAY_50};
  ${({ theme }) => theme.typo.SUBTITLE_20};
  text-align: left;
  padding-left: 2.4rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.BLACK_100};
  }

  &:focus {
    color: ${({ theme }) => theme.color.BLACK_100};
    outline: none;
  }
`;

export const RecentStackButton = styled(SidebarButton)`
  border: 0.1rem solid ${({ theme }) => theme.color.GRAY_30};
  border-radius: 1.6rem 1.6rem 0 0;
`;

export const TotalApplicationsButton = styled(SidebarButton)<{ isActive: boolean }>`
  border: 0rem solid ${({ theme }) => theme.color.GRAY_30};
  border-width: 0 0.1rem 0.1rem 0.1rem;
  border-radius: 0 0 1.6rem 1.6rem;
`;
