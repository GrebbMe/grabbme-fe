import { addMonths, format, subMonths } from 'date-fns';
import { useState } from 'react';
import {
  ChartHeaderContainer,
  DateContainer,
  HeaderDescription,
  HeaderTitle,
  IcArrow,
  YearMonth,
} from './chartHeader.style';
import { IcArrowNext, IcArrowPrev } from '@/shared/assets/svg/index';

interface Props {
  title: string;
  description: string;
}

const ChartHeader = ({ title, description }: Props) => {
  const [yearMonthDate, setYearMonthDate] = useState<Date>(new Date());

  const handleDateChange = (flag: number) => {
    const newDate: Date =
      flag > 0 ? addMonths(yearMonthDate, flag) : subMonths(yearMonthDate, -flag);
    setYearMonthDate(newDate);
  };

  return (
    <ChartHeaderContainer>
      <div className="title-container">
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderDescription>{description}</HeaderDescription>
      </div>
      <DateContainer>
        <IcArrow
          src={`${IcArrowPrev}`}
          alt="prev arrow icon"
          onClick={() => handleDateChange(-1)}
        />
        <YearMonth>{`${format(yearMonthDate, 'yyyy년 MM월')}`}</YearMonth>
        <IcArrow src={`${IcArrowNext}`} alt="next arrow icon" onClick={() => handleDateChange(1)} />
      </DateContainer>
    </ChartHeaderContainer>
  );
};

export default ChartHeader;
