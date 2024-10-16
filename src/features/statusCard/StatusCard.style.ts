import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 26.4rem;
  height: 19.2rem;
  padding: 2.4rem 3.2rem;
  border-radius: 0.8rem;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid ${({ theme }) => theme.color.GRAY_30};
  background-color: ${({ theme }) => theme.color.WHITE};
  transition: box-shadow 0.3s ease;
  gap: 0.8rem;

  &:hover {
    border-color: ${({ theme }) => theme.color.BLUE_50};
    box-shadow: 0 0.2rem 1.6rem 0.2rem ${({ theme }) => theme.color.BLUE_50_25};
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  align-self: stretch;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  align-self: stretch;
`;

export const TitleBox = styled.p`
  width: 100%;
  ${({ theme }) => theme.typo.SUBTITLE_14};
  color: ${({ theme }) => theme.color.BLACK_100};
`;

export const ContentBox = styled.p`
  width: 20rem;
  height: 6.8rem;
  ${({ theme }) => theme.typo.CAPTION_12};
  color: ${({ theme }) => theme.color.BLACK_80};
  overflow: hidden;
`;

export const ButtonWrapper = styled.div<{ hasStatus: boolean }>`
  display: flex;
  justify-content: ${({ hasStatus }) => (hasStatus ? 'space-between' : 'flex-end')};
  align-items: center;
  align-self: stretch;
`;

export const CancelButton = styled.button`
  ${({ theme }) => theme.typo.CAPTION_12};
  padding: 0.25rem 0;
  background-color: transparent;
  color: ${({ theme }) => theme.color.GRAY_50};
  border: none;
  cursor: pointer;
  text-decoration: underline;
  flex-shrink: 0;
`;
