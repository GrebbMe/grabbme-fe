import { CalendarView } from '@/shared/types/calendar/calendar';
import { HeaderContainer } from '@/shared/ui/calendar/CustomHeader.style';

export interface CustomHeaderProps {
  date: Date;
  decreaseMonth: () => void;
  decreaseYear: () => void;
  increaseMonth: () => void;
  increaseYear: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
  arrowIcon: string;
  view: string; // 뷰 상태 (DATE 또는 MONTH)
  setView: (view: any) => void; // 뷰 상태를 변경하는 함수
}

export const CustomHeader = ({
  date,
  decreaseMonth,
  decreaseYear,
  increaseMonth,
  increaseYear,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  arrowIcon,
  view,
  setView,
}: CustomHeaderProps) => {
  const handleOnClick = () => {
    // 날짜 뷰에서 월 선택 뷰로 전환
    if (view === CalendarView.DATE) {
      setView(CalendarView.MONTH);
    }
    if (view === CalendarView.MONTH) {
      setView(CalendarView.DATE);
    }
  };

  return (
    <HeaderContainer>
      {view === CalendarView.DATE ? (
        <>
          <button
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
            className="prev-button"
          >
            <img src={arrowIcon} alt="Previous-month" />
          </button>
          <div className="year-month" onClick={handleOnClick}>
            {date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long' })}
          </div>
          <button
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
            className="next-button"
          >
            <img src={arrowIcon} alt="Next-month" />
          </button>
        </>
      ) : (
        <>
          <button onClick={decreaseYear} className="prev-button">
            <img src={arrowIcon} alt="Previous-year" />
          </button>
          <div className="year-month" onClick={handleOnClick}>
            {date.toLocaleDateString('ko-KR', { year: 'numeric' })}
          </div>
          <button onClick={increaseYear} className="next-button">
            <img src={arrowIcon} alt="Next-year" />
          </button>
        </>
      )}
    </HeaderContainer>
  );
};
