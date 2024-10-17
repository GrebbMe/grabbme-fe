import styled from 'styled-components';
import { typo } from '@/app/styles';

export const TopFiveStacksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

export const SubTitle = styled.h2`
  ${typo.SUBTITLE_14}
  color: ${({ theme }) => theme.color.PRIMARY_BLUE};
`;

export const RankContainer = styled.div`
  width: 21.6rem;
  height: 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.4rem;
  padding: 0 2rem 0 1.2rem;
  background-color: ${({ theme }) => theme.color.BLUE_30};

  div {
    display: flex;
    gap: 2.4rem;
  }
`;

export const Rank = styled.div`
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.BLUE_10};
  border-radius: 100%;
  ${typo.CAPTION_10};
  color: ${({ theme }) => theme.color.PRIMARY_BLUE};
`;

export const StackName = styled.p`
  display: inline-flex;
  align-items: center;
  ${typo.CAPTION_10};
  color: ${({ theme }) => theme.color.BLACK_80};
`;

export const PeopleCount = styled.p`
  ${typo.CAPTION_10};
  color: ${({ theme }) => theme.color.GRAY_50};
`;
