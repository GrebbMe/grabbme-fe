import { useEffect, useState } from 'react';
import * as S from './topFiveStacks.style';
import { fetchData } from '@/features/home/api/top5Stack.api';
import { StackData } from '@/features/home/model/top5Stack.model';

const TopFiveStacks = () => {
  // TODO : top5 axios get 요청 코드
  const [topFiveData, setTopFiveData] = useState<StackData[] | undefined>();

  useEffect((): void => {
    const fetchHandler = async (): Promise<void> => {
      const data: StackData[] | undefined = await fetchData();
      setTopFiveData(data);
    };

    fetchHandler().catch((err) => console.error(err));
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
