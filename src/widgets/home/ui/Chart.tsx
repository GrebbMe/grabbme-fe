import { useState } from 'react';
import BubbleBox from './BubbleBox';
import * as S from './Chart.style';
import LineGraphBox from './LineGraphBox';
import { ChartSidebar } from '@/features/home/ui/ChartSidebar';

const Chart = () => {
  const [menu, setMenu] = useState<'stack' | 'apply'>('stack');

  return (
    <S.WrapperContainer>
      <S.ChartContainer>
        <S.Title>진행중인 프로젝트</S.Title>
        <S.MainGraphContainer>
          <ChartSidebar setMenu={setMenu} />
          {menu === 'stack' ? <BubbleBox /> : <LineGraphBox />}
        </S.MainGraphContainer>
      </S.ChartContainer>
    </S.WrapperContainer>
  );
};

export default Chart;
