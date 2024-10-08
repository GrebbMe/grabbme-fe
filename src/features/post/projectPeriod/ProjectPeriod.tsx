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

export type ActiveInputType = 'start' | 'end' | null;

export const ProjectPeriod = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: ProjectPeriodProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeInput, setActiveInput] = useState<ActiveInputType>(null);
  const [tempStartDate, setTempStartDate] = useState<Date>(new Date());
  const [tempEndDate, setTempEndDate] = useState<Date>(new Date());

  const [tempSyncStartDate, setTempSyncStartDate] = useState<Date>(new Date());
  const [tempSyncEndDate, setTempSyncEndDate] = useState<Date>(new Date());

  const handleInputClick = (inputType: 'start' | 'end') => {
    setActiveInput(inputType);
    setIsModalOpen(true);
  };

  const handleSelectMonth = (month: number) => {
    if (activeInput === 'start') {
      setTempStartDate((prev) => new Date(`${prev.getFullYear()}/${month}`));
      setTempSyncStartDate(new Date(`${tempStartDate.getFullYear()}/${month}`));
    } else if (activeInput === 'end') {
      setTempEndDate((prev) => new Date(`${prev.getFullYear()}/${month}`));
      setTempSyncEndDate(new Date(`${tempEndDate.getFullYear()}/${month}`));
    }
  };

  const handleAccept = (activeInput: ActiveInputType) => {
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

  const handlePrevYear = (activeInput: ActiveInputType) => {
    if (activeInput === 'start') {
      setTempStartDate((prev) => subYears(prev, 1));
    } else if (activeInput === 'end') {
      setTempEndDate((prev) => subYears(prev, 1));
    }
  };

  const handleNextYear = (activeInput: ActiveInputType) => {
    if (activeInput === 'start') {
      setTempStartDate((prev) => addYears(prev, 1));
    } else if (activeInput === 'end') {
      setTempEndDate((prev) => addYears(prev, 1));
    }
  };

  return (
    <Container>
      <InputBox onClick={() => handleInputClick('start')}>
        {startDate ? format(startDate, 'yyyy/MM') : '선택'}
        <IcCalendar />
      </InputBox>
      -
      <InputBox onClick={() => handleInputClick('end')}>
        {endDate ? format(endDate, 'yyyy/MM') : '선택'}
        <IcCalendar />
      </InputBox>
      {isModalOpen && (
        <PeriodModal
          activeInput={activeInput}
          tempStartDate={tempStartDate}
          tempEndDate={tempEndDate}
          onSelectMonth={handleSelectMonth}
          onPrevYear={handlePrevYear}
          onNextYear={handleNextYear}
          onCancel={handleCancel}
          onAccept={handleAccept}
          tempSyncStartDate={tempSyncStartDate}
          setTempSyncStartDate={setTempSyncStartDate}
          tempSyncEndDate={tempSyncEndDate}
          setTempSyncEndDate={setTempSyncEndDate}
        />
      )}
    </Container>
  );
};
