import { ButtonBoxStyle } from '@/features/post/ui/deadlineCalendar/CustomCalendarContainer.style';
import { Button } from '@/shared/ui';

interface CustomCalendarContainerProps {
  datePickerRef: React.RefObject<any>;
  className?: string;
  children?: React.ReactNode;
  setSelectedDate: (date: Date | null) => void; // setSelectedDate 함수 받기
  tempDate: Date | null; // 임시 선택된 날짜 받기
  selectedDate: Date | null;
  setTempDate: (date: Date | null) => void;
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
}: CustomCalendarContainerProps) => {
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
    <div className={className}>
      {children}
      <ButtonBoxStyle>
        <Button state={'default'} content={'취소'} size={'76px'} onClick={handleCancle} />
        <Button state={'default'} content={'적용'} size={'76px'} onClick={handleAccept} />
      </ButtonBoxStyle>
    </div>
  );
};
