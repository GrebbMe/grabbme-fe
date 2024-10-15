import styled from 'styled-components';
import type { ContentCardType } from './ContentCard';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 26.4rem;
  height: 19.2rem;
  padding: 2.4rem 3.2rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.1);
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
  width: 20rem;
  height: 14.4rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.2rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const TitleBox = styled.p`
  ${({ theme }) => theme.typo.SUBTITLE_14};
  color: ${({ theme }) => theme.color.BLACK_100};
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`;

export const InfoBox = styled.span`
  ${({ theme }) => theme.typo.CAPTION_12};
  color: ${({ theme }) => theme.color.GRAY_50};
`;

export const DotBox = styled.span`
  width: 0.2rem;
  height: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.BLUE_50};
`;

export const ContentBox = styled.p<{ type: ContentCardType }>`
  ${({ theme }) => theme.typo.CAPTION_12};
  color: ${({ theme }) => theme.color.BLACK_80};
  width: 20rem;
  overflow: hidden;
  height: ${({ type }) => {
    if (type === 'A') return '5.1rem';
    if (type === 'B') return '5.1rem';
    if (type === 'C') return '6.8rem';
  }};
  margin-bottom: ${({ type }) => (type === 'B' ? '0.8rem' : '0')};
`;

export const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.4rem;
  align-self: stretch;
`;
