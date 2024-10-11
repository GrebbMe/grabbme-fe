import { styled } from 'styled-components';

export const Container = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;

  > span {
    ${({ theme }) => theme.typo.SUBTITLE_20};
    color: ${({ theme }) => theme.color.BLACK_80};
    margin: 0 1.1rem;
  }
`;

export const PlusButton = styled.button`
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  svg {
    stroke: ${({ theme }) => theme.color.BLUE_50};
  }
`;
export const MinusButton = styled.button`
  background-color: transparent;
  border: transparent;
  cursor: pointer;
`;
export const TrashButton = styled.button`
  margin-left: 1.6rem;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
`;
export const AddPositionButton = styled.button`
  margin-left: 1.6rem;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: transparent;
  gap: 0.4rem;
  color: ${({ theme }) => theme.color.BLACK_80};
  ${({ theme }) => theme.typo.CAPTION_14};
  cursor: pointer;

  svg {
    width: 1.4rem;
    height: 1.4rem;
    stroke: ${({ theme }) => theme.color.GRAY_50};
  }
`;
