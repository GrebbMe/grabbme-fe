import { styled } from 'styled-components';

const Modal = styled.div`
  padding: 2.4rem;
  position: absolute;
  top: calc(100% + 1.6rem);
  left: 0;
  background-color: white;
  padding: 2rem;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.color.GRAY_30};
  z-index: 1000;
  width: 28.8rem;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3.2rem;
  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
const YearStyle = styled.div`
  display: grid;
  place-items: center;
  width: 11.6rem;
  ${({ theme }) => theme.typo.SUBTITLE_20};
  color: ${({ theme }) => theme.color.BLACK_100};
`;

const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.8rem;
`;

const MonthButton = styled.button<{ isSelected: boolean }>`
  ${({ theme }) => theme.typo.BODY_MEDIUM};
  width: 5.4rem;
  height: 3.8rem;
  margin-bottom: 0.8rem;
  border-radius: 0.8rem;
  border: 1px solid
    ${({ isSelected, theme }) => (isSelected ? theme.color.PRIMARY_BLUE : theme.color.GRAY_30)};
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.PRIMARY_BLUE : 'transparent'};
  color: ${({ isSelected, theme }) => (isSelected ? theme.color.WHITE : theme.color.BLACK_100)};
  cursor: pointer;
  &:hover {
    border: 1px solid
      ${({ isSelected, theme }) => (isSelected ? theme.color.PRIMARY_BLUE : theme.color.BLUE_50)};
    background-color: ${({ isSelected, theme }) =>
      isSelected ? theme.color.PRIMARY_BLUE : theme.color.BLUE_30};
    color: ${({ isSelected, theme }) => (isSelected ? theme.color.WHITE : theme.color.BLACK_100)};
  }
`;

const ModalActions = styled.div`
  margin-top: 2.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;
const IconBox = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  place-items: center;
  cursor: pointer;
`;
export { Modal, ModalHeader, YearStyle, MonthGrid, MonthButton, ModalActions, IconBox };
