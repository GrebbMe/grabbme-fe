import { useEffect, useState } from 'react';
import * as S from './TopFiveStacks.style.ts';
import { getTopFiveStack } from '@/features/home/api/topFiveStacks.api';
import { StackData } from '@/features/home/model/stack.model';

const TopFiveStacks = () => {
  // TODO : top5 axios get 요청 코드
  const [topFiveData, setTopFiveData] = useState<StackData[] | undefined>();

  useEffect((): void => {
    getTopFiveStack()
      .then(setTopFiveData)
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <S.TopFiveStacksContainer>
      <S.SubTitle>TOP 5 인기 스택</S.SubTitle>
      {topFiveData?.map(({ rank, stackName, peopleCount }) => (
        <S.RankContainer key={rank}>
          <div>
            <S.Rank>{rank}</S.Rank>
            <S.StackName>{stackName}</S.StackName>
          </div>
          <S.PeopleCount>{peopleCount}</S.PeopleCount>
        </S.RankContainer>
      ))}
    </S.TopFiveStacksContainer>
  );
};

export default TopFiveStacks;
