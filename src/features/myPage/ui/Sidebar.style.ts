import styled from 'styled-components';
import type { SidebarItemProps } from './Sidebar';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 28.8rem;
  background-color: ${({ theme }) => theme.color.WHITE};
  border: 0.1rem solid ${({ theme }) => theme.color.GRAY_30};
  border-radius: 1.6rem;
  overflow: hidden;
`;

export const SidebarItem = styled.div<SidebarItemProps>`
  ${({ theme }) => theme.typo.SUBTITLE_20};
  display: flex;
  padding: 2rem 2.4rem;
  align-items: center;
  color: ${({ theme, isActive }) => (isActive ? theme.color.BLACK_100 : theme.color.GRAY_50)};
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-bottom: 0.1rem solid ${({ theme }) => theme.color.GRAY_30};

  &:hover {
    background-color: ${({ theme }) => theme.color.BLUE_30};
    color: ${({ theme, isActive }) => (isActive ? theme.color.BLACK_100 : theme.color.GRAY_50)};
  }

  &:first-child {
    border-radius: 1.6rem 1.6rem 0 0;
  }

  &:last-child {
    border-radius: 0 0 1.6rem 1.6rem;
    border-bottom: none;
  }
`;
