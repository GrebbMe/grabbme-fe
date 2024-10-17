import * as S from './ChartBox.style';
import { BubbleChart, ChartHeader, TopFiveStacks } from '@/features/home';

const BubbleBox = () => {
  return (
    <S.Container>
      <ChartHeader
        title={`최근 인기 스택`}
        description={`GrabbMe에서 가장 많이 지원하는 인기있는 개발 스택을 확인해보세요.`}
      />
      <S.ChartContainer>
        <BubbleChart />
        <S.TopStackContainer>
          <TopFiveStacks />
        </S.TopStackContainer>
      </S.ChartContainer>
    </S.Container>
  );
};

export default BubbleBox;
