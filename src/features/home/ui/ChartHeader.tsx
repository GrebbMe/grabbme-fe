import { format } from 'date-fns';
import { useState } from 'react';
import * as S from './ChartHeader.style';
import { handleAddMonth, handleSubMonth } from '@/features/home/lib/monthUtils';
import { IcArrowNext, IcArrowPrev } from '@/shared/assets/svg';

interface Props {
  title: string;
  description: string;
}

const ChartHeader = ({ title, description }: Props) => {
  const [yearMonthDate, setYearMonthDate] = useState<Date>(new Date());

  return (
    <S.ChartHeaderContainer>
      <S.ChartHeaderInnerDiv>
        <S.HeaderTitle>{title}</S.HeaderTitle>
        <S.HeaderDescription>{description}</S.HeaderDescription>
      </S.ChartHeaderInnerDiv>
      <S.DateContainer>
        <S.IcArrow
          src={`${IcArrowPrev}`}
          alt="prev arrow"
          onClick={() => setYearMonthDate(handleSubMonth(yearMonthDate))}
        />
        <S.YearMonth>{`${format(yearMonthDate, 'yyyy년 MM월')}`}</S.YearMonth>
        <S.IcArrow
          src={`${IcArrowNext}`}
          alt="next arrow"
          onClick={() => setYearMonthDate(handleAddMonth(yearMonthDate))}
        />
      </S.DateContainer>
    </S.ChartHeaderContainer>
  );
};

export default ChartHeader;
