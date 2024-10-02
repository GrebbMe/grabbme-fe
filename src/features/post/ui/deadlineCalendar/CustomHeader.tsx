import { ReactNode } from 'react';
import { HeaderContainer } from '@/features/post/ui/deadlineCalendar/CustomHeader.style';

export interface CustomHeaderProps {
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
  arrowLeftIcon: ReactNode;
  arrowRightIcon: ReactNode;
}

export const CustomHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  arrowLeftIcon,
  arrowRightIcon,
}: CustomHeaderProps) => {
  return (
    <HeaderContainer>
      <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} className="prev-button">
        {arrowLeftIcon}
      </button>
      <div className="year-month">
        {date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long' })}
      </div>
      <button onClick={increaseMonth} disabled={nextMonthButtonDisabled} className="next-button">
        {arrowRightIcon}
      </button>
    </HeaderContainer>
  );
};
