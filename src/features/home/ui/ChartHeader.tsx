import { addMonths, format, subMonths } from 'date-fns';
import { useState } from 'react';
import {
  ChartHeaderContainer,
  ChartHeaderInnerDiv,
  DateContainer,
  HeaderDescription,
  HeaderTitle,
  IcArrow,
  YearMonth,
} from './ChartHeader.style';
import { handleAddMonth, handleSubMonth } from '@/features/home/lib/monthUtils';
import { IcArrowNext, IcArrowPrev } from '@/shared/assets/svg';

interface Props {
  title: string;
  description: string;
}

const ChartHeader = ({ title, description }: Props) => {
  const [yearMonthDate, setYearMonthDate] = useState<Date>(new Date());

  return (
    <ChartHeaderContainer>
      <ChartHeaderInnerDiv>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderDescription>{description}</HeaderDescription>
      </ChartHeaderInnerDiv>
      <DateContainer>
        <IcArrow
          src={`${IcArrowPrev}`}
          alt="prev arrow"
          onClick={() => setYearMonthDate(handleSubMonth(yearMonthDate))}
        />
        <YearMonth>{`${format(yearMonthDate, 'yyyy년 MM월')}`}</YearMonth>
        <IcArrow
          src={`${IcArrowNext}`}
          alt="next arrow"
          onClick={() => setYearMonthDate(handleAddMonth(yearMonthDate))}
        />
      </DateContainer>
    </ChartHeaderContainer>
  );
};

export default ChartHeader;
