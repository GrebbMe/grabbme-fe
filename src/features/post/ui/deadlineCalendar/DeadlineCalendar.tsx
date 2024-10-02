import { ko } from 'date-fns/locale';
import { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { CustomCalendarContainer } from '@/features/post/ui/deadlineCalendar/CustomCalendarContainer';
import { CustomHeader, CustomHeaderProps } from '@/features/post/ui/deadlineCalendar/CustomHeader';
import {
  DatePickerContainer,
  StyledDatePicker,
} from '@/features/post/ui/deadlineCalendar/DeadlineCalendar.style';
import { IcArrowLeft2 } from '@/shared/assets/icon/IcArrowLeft2';
import { IcArrowRight2 } from '@/shared/assets/icon/IcArrowRight2';
import { IcCalendar } from '@/shared/assets/icon/IcCalendar';

import 'react-datepicker/dist/react-datepicker.css';

interface DeadlineCalendarProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
}

export const DeadlineCalendar = ({ selectedDate, setSelectedDate }: DeadlineCalendarProps) => {
  const [tempDate, setTempDate] = useState<Date | null>(null);
  const datePickerRef = useRef<DatePicker>(null);

  const handleDateChange = (date: Date | null) => {
    setTempDate(date);
  };

  const handleOnClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setFocus();
    }
  };

  return (
    <DatePickerContainer>
      <div className="box">
        <div className="date-input">
          <StyledDatePicker
            locale={ko}
            ref={datePickerRef}
            selected={tempDate}
            onChange={handleDateChange}
            dateFormat="yyyy/MM/dd"
            placeholderText="선택"
            minDate={new Date()} // 오늘 이전의 날짜 선택 불가
            shouldCloseOnSelect={false} // 날짜를 선택해도 캘린더 모달이 닫히지 않도록 설정
            // 커스텀 캘린더 컨테이너 사용. 취소, 적용 버튼
            calendarContainer={(props: any) => (
              <CustomCalendarContainer
                {...props}
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
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }: CustomHeaderProps) => (
              <CustomHeader
                date={date}
                decreaseMonth={decreaseMonth}
                increaseMonth={increaseMonth}
                prevMonthButtonDisabled={prevMonthButtonDisabled}
                nextMonthButtonDisabled={nextMonthButtonDisabled}
                arrowLeftIcon={<IcArrowLeft2 />}
                arrowRightIcon={<IcArrowRight2 />}
              />
            )}
          />
        </div>
        <div className="date-icon" onClick={handleOnClick}>
          <IcCalendar />
        </div>
      </div>
    </DatePickerContainer>
  );
};
