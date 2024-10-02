import React, { forwardRef } from 'react';
import { ButtonBoxStyle } from '@/features/post/ui/deadlineCalendar/CustomCalendarContainer.style';
import { Button } from '@/shared/ui';
import DatePicker from 'react-datepicker';

interface CustomCalendarContainerProps {
  datePickerRef: React.RefObject<DatePicker>;
  className?: string;
  children?: React.ReactNode;
  setSelectedDate: (date: Date | null) => void;
  tempDate: Date | null;
  selectedDate: Date | null;
  setTempDate: (date: Date | null) => void;
}

export const CustomCalendarContainer = forwardRef<HTMLDivElement, CustomCalendarContainerProps>(
  (
    { className, children, datePickerRef, setSelectedDate, selectedDate, setTempDate, tempDate },
    ref,
  ) => {
    const handleCancel = () => {
      if (datePickerRef.current) {
        setTempDate(selectedDate);
        datePickerRef.current.setOpen(false);
      }
    };

    const handleAccept = () => {
      if (datePickerRef.current) {
        setSelectedDate(tempDate);
        datePickerRef.current.setOpen(false);
      }
    };

    return (
      <div className={className} ref={ref}>
        {children}
        <ButtonBoxStyle>
          <Button state={'default'} content={'취소'} size={'76px'} onClick={handleCancel} />
          <Button state={'default'} content={'적용'} size={'76px'} onClick={handleAccept} />
        </ButtonBoxStyle>
      </div>
    );
  },
);
