import { styled } from 'styled-components';

export const ItemInput = styled.div`
  ${({ theme }) => theme.typo.CAPTION_14};
  color: ${({ theme }) => theme.color.GRAY_50};
  align-items: center;
  height: 5.2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 0.8rem 0.8rem 0 0;
  border: 0.1rem solid ${({ theme }) => theme.color.BLUE_50};
  border-bottom-color: ${({ theme }) => theme.color.BLUE_50};
  border-bottom-width: 0.05rem;
  width: 100%;
  padding: 0 1.6rem;

  &.default-input {
    border-radius: 0.8rem;
    border: 0.1rem solid ${({ theme }) => theme.color.GRAY_30};
  }

  &.not-empty-input {
    border-radius: 0.8rem;
  }
`;

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

export const InputButtonBox = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
`;
