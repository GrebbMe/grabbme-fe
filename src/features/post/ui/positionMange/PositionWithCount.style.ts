import { styled } from 'styled-components';

export const Container = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
`;

export const CountControlBox = styled.div`
  margin-left: 2.4rem;
  width: 8rem;
  display: flex;
  align-items: center;
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
  padding: 0;
`;
export const Count = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  ${({ theme }) => theme.typo.SUBTITLE_20};
  color: ${({ theme }) => theme.color.BLACK_80};

  ${({ theme }) => theme.device.MOBILE} {
    ${({ theme }) => theme.typo.BODY_SEMIBOLD};
    color: ${({ theme }) => theme.color.BLACK_80};
  }
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

  ${({ theme }) => theme.device.MOBILE} {
    margin-left: 0;
  }
`;
