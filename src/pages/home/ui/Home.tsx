import { useState } from 'react';
import * as S from './Home.style';
import { SearchBar, StackSearch } from '@/features/board/ui';
import { Search } from '@/features/home';
import { AllClosingProject, RecentHotProject, AllStackBadge, Chart } from '@/widgets/home';

const Home = () => {
  const [query, setQuery] = useState('');
  return (
    <S.HomeContainer>
      <S.TitleContainer>
        <S.Title>오늘도 새로운 기회를 잡아보세요!</S.Title>
      </S.TitleContainer>
      <S.SearchContainer>
        <SearchBar query={query} setQuery={setQuery} />
      </S.SearchContainer>
      <S.AllStackContainer>
        <StackSearch />
      </S.AllStackContainer>
      <RecentHotProject />
      <AllClosingProject />
      <Chart />
    </S.HomeContainer>
  );
};

export default Home;
