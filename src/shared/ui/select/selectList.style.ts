import { Icon } from '@iconify/react/dist/iconify.js';
import { styled } from 'styled-components';

const DropdownContainer = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  position: relative;
`;

const DropdownHeader = styled.div<{ isOpen: boolean }>`
  padding: 1.6rem;
  border: 0.1rem solid ${({ theme }) => theme.color.GRAY_30};
  background: #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ isOpen }) => (isOpen ? '0.8rem 0.8rem 0 0' : '0.8rem')};
  border-color: ${({ isOpen, theme }) => (isOpen ? theme.color.BLUE_50 : theme.color.GRAY_30)};
  border-bottom-width: ${({ isOpen }) => isOpen && '0.05rem'};
  ${({ theme }) => theme.typo.CAPTION_14};
  color: ${({ theme }) => theme.color.BLACK_80};
`;

const DropdownListContainer = styled.div`
  position: absolute;
  width: 100%;
  border: 0.1rem solid ${({ theme }) => theme.color.BLUE_50};
  border-top: 0rem solid transparent;
  background: #fff;
  z-index: 1000;
  border-radius: 0 0 0.8rem 0.8rem;
  overflow: hidden;
`;

const DropdownListItem = styled.div<{ isSelected: boolean }>`
  padding: 1.6rem;
  height: 4.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background: ${({ theme }) => theme.color.BLUE_30};
  }
  color: ${({ isSelected, theme }) => (isSelected ? theme.color.BLACK_100 : theme.color.BLACK_80)};
  ${({ isSelected, theme }) => (isSelected ? theme.typo.SUBTITLE_14 : theme.typo.CAPTION_14)};
`;
const StyledIcon = styled(Icon)`
  width: 2.4rem;
  height: 2.4rem;
  color: ${({ theme }) => theme.color.BLUE_50};
`;

export { DropdownContainer, DropdownHeader, DropdownListContainer, DropdownListItem, StyledIcon };
