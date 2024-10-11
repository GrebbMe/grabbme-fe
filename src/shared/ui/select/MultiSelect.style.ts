import { styled } from 'styled-components';

export const Container = styled.div`
  position: relative;
  user-select: none;
  display: flex;
  flex-direction: column;
  width: 80.8rem;
  height: 100%;
  & > .stack-box {
    background-color: ${({ theme }) => theme.color.WHITE};
    border-radius: 0 0 0.8rem 0.8rem;
    border: 0.1rem solid ${({ theme }) => theme.color.BLUE_50};
    border-top-width: 0rem;
    width: 100%;
    gap: 0.8rem;
    padding: 1.6rem;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 100;
  }
`;
export const ItemInput = styled.div<{ $isOpen: boolean }>`
  ${({ theme }) => theme.typo.CAPTION_14};
  color: ${({ theme }) => theme.color.GRAY_50};
  align-items: center;
  height: 4.8rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.WHITE};

  border-radius: ${({ $isOpen }) => ($isOpen ? '0.8rem 0.8rem 0 0' : '0.8rem')};
  border: 0.1rem solid
    ${({ theme, $isOpen }) => ($isOpen ? theme.color.BLUE_50 : theme.color.GRAY_30)};
  border-bottom-width: ${({ $isOpen }) => ($isOpen ? '0.05rem' : '0.1rem')};
  width: 100%;
  padding: 0 1.6rem;
`;
export const InputButtonBox = styled.div`
  display: flex;
  gap: 0.8rem;
`;
export const IconWrapper = styled.div`
  cursor: pointer;
`;
