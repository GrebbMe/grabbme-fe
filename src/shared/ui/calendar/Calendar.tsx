import { ko } from 'date-fns/locale';
import { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';

import arrowIcon from '@/shared/assets/icon/arrow-icon.png';
import calendarIcon from '@/shared/assets/icon/calendar-icon.png';
import { CalendarView } from '@/shared/types/calendar/calendar';
import { DatePickerContainer, StyledDatePicker } from '@/shared/ui/calendar/Calendar.style';
import { CustomCalendarContainer } from '@/shared/ui/calendar/CustomCalendarContainer';
import { CustomHeader, CustomHeaderProps } from '@/shared/ui/calendar/CustomHeader';
import 'react-datepicker/dist/react-datepicker.css';

interface CalendarProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
}

export const Calendar = ({ selectedDate, setSelectedDate }: CalendarProps) => {
  const [tempDate, setTempDate] = useState<Date | null>(null);
  const datePickerRef = useRef<DatePicker>(null);
  const [view, setView] = useState<CalendarView>(CalendarView.DATE); // 현재 뷰 상태를 저장하는 state

  const handleDateChange = (date: Date | null) => {
    setTempDate(date);
  };

  const handleOnClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setFocus();
    }
  };

  // 모달 외부 클릭 시, 이벤트
  const onClickOutside = () => {
    setView(CalendarView.DATE);
    console.log(new Date(9999, 11, 31));
  };

  return (
    <DatePickerContainer>
      <div className="box">
        <div className="date-input">
          <StyledDatePicker
            showMonthYearPicker={view === CalendarView.DATE ? false : true}
            locale={ko}
            maxDate={new Date(9999, 12, 31)}
            ref={datePickerRef}
            selected={tempDate}
            onChange={handleDateChange}
            dateFormat="yyyy/MM/dd"
            placeholderText="날짜를 입력하세요 (예: 2024/04/08)"
            minDate={new Date()} // 오늘 이전의 날짜 선택 불가
            shouldCloseOnSelect={false} // 날짜를 선택해도 캘린더 모달이 닫히지 않도록 설정
            onClickOutside={onClickOutside}
            // 커스텀 캘린더 컨테이너 사용. 취소, 적용 버튼
            calendarContainer={(props: any) => (
              <CustomCalendarContainer
                {...props}
                view={view}
                setView={setView}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                tempDate={tempDate}
                setTempDate={setTempDate}
                datePickerRef={datePickerRef}
              />
            )}
            renderCustomHeader={({
              date,
              decreaseMonth,
              decreaseYear,
              increaseMonth,
              increaseYear,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }: CustomHeaderProps) => (
              <CustomHeader
                date={date}
                decreaseMonth={decreaseMonth}
                decreaseYear={decreaseYear}
                increaseMonth={increaseMonth}
                increaseYear={increaseYear}
                prevMonthButtonDisabled={prevMonthButtonDisabled}
                nextMonthButtonDisabled={nextMonthButtonDisabled}
                arrowIcon={arrowIcon}
                view={view} // 현재 뷰 상태 전달
                setView={setView} // 뷰 상태를 변경할 함수 전달
              />
            )}
          />
        </div>
        <div className="date-icon" onClick={handleOnClick}>
          <img src={calendarIcon} alt="Calendar Icon" />
        </div>
      </div>
    </DatePickerContainer>
  );
};
