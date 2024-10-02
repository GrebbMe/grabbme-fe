import { ko } from 'date-fns/locale';
import React, { useState, forwardRef, useRef } from 'react';
import DatePicker from 'react-datepicker';
import { CustomCalendarContainer } from '@/features/post/ui/deadlineCalendar/CustomCalendarContainer';
import { CustomHeader, CustomHeaderProps } from '@/features/post/ui/deadlineCalendar/CustomHeader';
import {
  DatePickerContainer,
  DatePickerIconStyle,
  DatePickerLayout,
  DatePickerWrapper,
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

export const DeadlineCalendar = forwardRef<DatePicker, DeadlineCalendarProps>(
  ({ selectedDate, setSelectedDate }, ref) => {
    const [tempDate, setTempDate] = useState<Date | null>(null);
    const datePickerRef = useRef<DatePicker>(null);

    const handleDateChange = (date: Date | null) => {
      setTempDate(date);
    };

    const handleOnClick = () => {
      if (ref && typeof ref !== 'function' && ref.current) {
        ref.current.setFocus();
      }
    };

    return (
      <DatePickerContainer>
        <DatePickerWrapper>
          <DatePickerLayout>
            <StyledDatePicker
              locale={ko}
              ref={datePickerRef}
              selected={tempDate}
              onChange={handleDateChange}
              dateFormat="yyyy/MM/dd"
              placeholderText="선택"
              minDate={new Date()}
              shouldCloseOnSelect={false}
              calendarContainer={(props: any) => (
                <CustomCalendarContainer
                  {...props}
                  datePickerRef={datePickerRef}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  tempDate={tempDate}
                  setTempDate={setTempDate}
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
          </DatePickerLayout>
          <DatePickerIconStyle onClick={handleOnClick}>
            <IcCalendar />
          </DatePickerIconStyle>
        </DatePickerWrapper>
      </DatePickerContainer>
    );
  },
);
