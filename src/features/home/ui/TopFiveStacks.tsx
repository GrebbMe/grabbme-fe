import { useEffect, useState } from 'react';
import * as S from './topFiveStacks.style';
import { getTopFiveStack } from '@/features/home/api/topFiveStacks.api';
import { StackData } from '@/features/home/model/stack.model';

const TopFiveStacks = () => {
  // TODO : top5 axios get 요청 코드
  const [topFiveData, setTopFiveData] = useState<StackData[] | undefined>();

  useEffect((): void => {
    getTopFiveStack()
      .then((data) => {
        setTopFiveData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <S.TopFiveStacksContainer>
      <S.SubTitle>TOP 5 인기 스택</S.SubTitle>
      {topFiveData?.map((data) => (
        <S.RankContainer>
          <div>
            <S.Rank>{data.id}</S.Rank>
            <S.StackName>{data.stackName}</S.StackName>
          </div>
          <S.PeopleCount>{data.peopleCount}</S.PeopleCount>
        </S.RankContainer>
      ))}
    </S.TopFiveStacksContainer>
  );
};

export default TopFiveStacks;
