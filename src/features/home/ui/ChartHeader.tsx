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
  const [yearMonthDate, setYearMonthDate] = useState(new Date());

  const handleDate = (flag: number) => {
    const newDate: Date = new Date(yearMonthDate);
    newDate.setMonth(newDate.getMonth() + flag);
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
          src={IcArrowPrev.toString()}
          alt="prev arrow icon"
          onClick={() => handleDate(-1)}
        />
        <YearMonth>{`${yearMonthDate.getFullYear()}년 ${yearMonthDate.getMonth() + 1}월`}</YearMonth>
        <IcArrow src={IcArrowNext.toString()} alt="next arrow icon" onClick={() => handleDate(1)} />
      </DateContainer>
    </ChartHeaderContainer>
  );
};

export default ChartHeader;
