import { addYears, format, subYears } from 'date-fns';
import { useState } from 'react';
import { PeriodModal } from './PeriodModal';
import { Container, InputBox } from '@/features/post/projectPeriod/ProjectPeriod.style';
import { IcCalendar } from '@/shared/assets/icon/IcCalendar';

export interface ProjectPeriodProps {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
}

export const ProjectPeriod = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: ProjectPeriodProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeInput, setActiveInput] = useState<'start' | 'end' | null>(null);
  const [tempStartDate, setTempStartDate] = useState<Date>(new Date());
  const [tempEndDate, setTempEndDate] = useState<Date>(new Date());

  const [tempStartDate2, setTempStartDate2] = useState<Date>(new Date());
  const [tempEndDate2, setTempEndDate2] = useState<Date>(new Date());

  const handleInputClick = (inputType: 'start' | 'end') => {
    setActiveInput(inputType);
    setIsModalOpen(true);
  };

  const handleMonthSelect = (month: number) => {
    if (activeInput === 'start') {
      setTempStartDate((prev) => new Date(`${prev.getFullYear()}/${month}`));
      setTempStartDate2(new Date(`${tempStartDate.getFullYear()}/${month}`));
    } else if (activeInput === 'end') {
      setTempEndDate((prev) => new Date(`${prev.getFullYear()}/${month}`));
      setTempEndDate2(new Date(`${tempEndDate.getFullYear()}/${month}`));
    }
  };

  const handleAccept = (activeInput: string | null) => {
    if (activeInput === 'start') {
      setStartDate(tempStartDate);
    } else if (activeInput === 'end') {
      setEndDate(tempEndDate);
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    if (activeInput === 'start') {
      setTempStartDate((prev) => (startDate ? startDate : prev));
    } else if (activeInput === 'end') {
      setTempEndDate((prev) => (endDate ? endDate : prev));
    }
    setIsModalOpen(false);
  };

  const handlePreYear = (activeInput: string | null) => {
    if (activeInput === 'start') {
      setTempStartDate((prev) => subYears(prev, 1));
    } else if (activeInput === 'end') {
      setTempEndDate((prev) => subYears(prev, 1));
    }
  };

  const handleNextYear = (activeInput: string | null) => {
    if (activeInput === 'start') {
      setTempStartDate((prev) => addYears(prev, 1));
    } else if (activeInput === 'end') {
      setTempEndDate((prev) => addYears(prev, 1));
    }
  };

  return (
    <Container>
      <InputBox onClick={() => handleInputClick('start')}>
        {(startDate && format(startDate, 'yyyy/MM')) || '선택'}
        <IcCalendar />
      </InputBox>
      -
      <InputBox onClick={() => handleInputClick('end')}>
        {(endDate && format(endDate, 'yyyy/MM')) || '선택'}
        <IcCalendar />
      </InputBox>
      {isModalOpen && (
        <PeriodModal
          activeInput={activeInput}
          tempStartDate={tempStartDate}
          tempEndDate={tempEndDate}
          handleMonthSelect={handleMonthSelect}
          handlePreYear={handlePreYear}
          handleNextYear={handleNextYear}
          handleCancel={handleCancel}
          handleAccept={handleAccept}
          tempStartDate2={tempStartDate2}
          setTempStartDate2={setTempStartDate2}
          tempEndDate2={tempEndDate2}
          setTempEndDate2={setTempEndDate2}
        />
      )}
    </Container>
  );
};
