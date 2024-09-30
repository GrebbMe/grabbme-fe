import { CalendarView } from '@/shared/types/calendar/calendar';
import { ButtonBoxStyle } from '@/shared/ui/calendar/CustomCalendarContainer.style';

interface CustomCalendarContainerProps {
  datePickerRef: React.RefObject<any>;
  className?: string;
  children?: React.ReactNode;
  setSelectedDate: (date: Date | null) => void; // setSelectedDate 함수 받기
  tempDate: Date | null; // 임시 선택된 날짜 받기
  selectedDate: Date | null;
  setTempDate: (date: Date | null) => void;
  view: CalendarView;
  setView: (string: CalendarView) => void;
}

// 커스텀 캘린더 컨테이너 컴포넌트
export const CustomCalendarContainer = ({
  className,
  children,
  datePickerRef,
  setSelectedDate,
  selectedDate,
  setTempDate,
  tempDate,
  view,
  setView,
}: CustomCalendarContainerProps) => {
  const handleCancle = () => {
    // if (view === CalendarView.MONTH) {
    //   setView(CalendarView.DATE);
    // } else
    if (datePickerRef.current) {
      setTempDate(selectedDate);
      datePickerRef.current.setOpen(false);
      setView(CalendarView.DATE);
    }
  };

  const handleAccept = () => {
    if (view === CalendarView.MONTH) {
      setView(CalendarView.DATE);
    } else if (datePickerRef.current) {
      setSelectedDate(tempDate);
      datePickerRef.current.setOpen(false);
    }
  };

  return (
    <div className={className}>
      {children}
      <ButtonBoxStyle>
        <button onClick={handleCancle}>취소</button>
        <button onClick={handleAccept}>적용</button>
      </ButtonBoxStyle>
    </div>
  );
};
