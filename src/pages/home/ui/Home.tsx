import * as S from './Home.style';
import { Search } from '@/features/home';
import { AllClosingProject, RecentHotProject, AllStackBadge, Chart } from '@/widgets/home';

const Home = () => {
  return (
    <S.HomeContainer>
      <S.SearchContainer>
        <Search />
      </S.SearchContainer>
      <S.AllStackContainer>
        <AllStackBadge />
      </S.AllStackContainer>
      <RecentHotProject />
      <AllClosingProject />
      <Chart />
    </S.HomeContainer>
  );
};

export default Home;
