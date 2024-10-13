import * as S from './topFiveStacks.style';

const TopFiveStacks = () => {
  // TODO : top5 get 요청 코드
  // 임시 목업데이터
  const topFiveData = [
    {
      id: 1,
      stackName: 'React',
      peopleCount: '254명',
    },
    {
      id: 2,
      stackName: 'Kotlin',
      peopleCount: '228명',
    },
    {
      id: 3,
      stackName: 'Swift',
      peopleCount: '200명',
    },
    {
      id: 4,
      stackName: 'Spring',
      peopleCount: '175명',
    },
    {
      id: 5,
      stackName: 'Flutter',
      peopleCount: '169명',
    },
  ];

  return (
    <S.TopFiveStacksContainer>
      <S.SubTitle>TOP 5 인기 스택</S.SubTitle>
      {topFiveData.map((data) => (
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
