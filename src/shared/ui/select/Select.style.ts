import { styled } from 'styled-components';

export const DropdownContainer = styled.div<{ size: 'sm' | 'md' | 'lg' }>`
  width: ${({ size }) => (size === 'sm' ? '28.8rem' : size === 'md' ? '49.6rem' : '80.8rem')};
  position: relative;
`;

export const DropdownHeader = styled.div<{ $isOpen: boolean }>`
  height: 4.8rem;
  padding: 0 1.6rem;
  border: 0.1rem solid ${({ theme }) => theme.color.GRAY_30};
  background: #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ $isOpen }) => ($isOpen ? '0.8rem 0.8rem 0 0' : '0.8rem')};
  border-color: ${({ $isOpen, theme }) => ($isOpen ? theme.color.BLUE_50 : theme.color.GRAY_30)};
  border-bottom-width: ${({ $isOpen }) => $isOpen && '0.05rem'};
  ${({ theme }) => theme.typo.CAPTION_14};
  color: ${({ theme }) => theme.color.BLACK_80};
`;

export const Placeholder = styled.span`
  color: ${({ theme }) => theme.color.GRAY_50};
  ${({ theme }) => theme.typo.CAPTION_14};
`;

export const DropdownListContainer = styled.div`
  position: absolute;
  width: 100%;
  border: 0.1rem solid ${({ theme }) => theme.color.BLUE_50};
  border-top: 0rem solid transparent;
  background: #fff;
  z-index: 1000;
  border-radius: 0 0 0.8rem 0.8rem;
  overflow: hidden;
`;

export const DropdownListItem = styled.div<{ $isSelected: boolean }>`
  padding: 1.6rem;
  height: 4.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background: ${({ theme }) => theme.color.BLUE_30};
  }
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.color.BLACK_100 : theme.color.BLACK_80};
  ${({ $isSelected, theme }) => ($isSelected ? theme.typo.SUBTITLE_14 : theme.typo.CAPTION_14)};
`;
