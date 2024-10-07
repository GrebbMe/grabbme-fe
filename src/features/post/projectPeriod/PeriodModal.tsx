import { format } from 'date-fns';
import {
  IconBox,
  Modal,
  ModalActions,
  ModalHeader,
  MonthButton,
  MonthGrid,
  YearStyle,
} from '@/features/post/projectPeriod/PeriodModal.style';
import { ActiveInputType } from '@/features/post/projectPeriod/ProjectPeriod';
import { IcArrowLeft } from '@/shared/assets/icon/IcArrowLeft';
import { IcArrowRight } from '@/shared/assets/icon/IcArrowRight';
import { MONTHS } from '@/shared/consts/months';
import { Button } from '@/shared/ui';

interface PeriodModalProps {
  activeInput: 'start' | 'end' | null;
  tempStartDate: Date;
  tempEndDate: Date;
  handleMonthSelect: (month: number) => void;
  handlePrevYear: (activeInput: ActiveInputType) => void;
  handleNextYear: (activeInput: ActiveInputType) => void;
  handleCancel: () => void;
  handleAccept: (activeInput: ActiveInputType) => void;
  tempSyncStartDate: Date;
  setTempSyncStartDate: (date: Date) => void;
  tempSyncEndDate: Date;
  setTempSyncEndDate: (date: Date) => void;
}

export const PeriodModal = ({
  activeInput,
  tempStartDate,
  tempEndDate,
  handleMonthSelect,
  handlePrevYear,
  handleNextYear,
  handleCancel,
  handleAccept,
  tempSyncStartDate,
  tempSyncEndDate,
}: PeriodModalProps) => {
  return (
    <Modal>
      <ModalHeader>
        <IconBox onClick={() => handlePrevYear(activeInput)}>
          <IcArrowLeft />
        </IconBox>
        <YearStyle>
          {format(activeInput === 'start' ? tempStartDate : tempEndDate, 'yyyy년')}
        </YearStyle>
        <IconBox onClick={() => handleNextYear(activeInput)}>
          <IcArrowRight />
        </IconBox>
      </ModalHeader>
      <MonthGrid>
        {MONTHS.map((v, idx) => {
          return (
            <MonthButton
              key={v}
              $isSelected={
                activeInput === 'start'
                  ? format(new Date(tempStartDate), 'yyyyMM') ===
                      format(new Date(tempSyncStartDate), 'yyyyMM') &&
                    Number(format(new Date(tempStartDate), 'MM')) === idx + 1
                  : format(new Date(tempEndDate), 'yyyyMM') ===
                      format(new Date(tempSyncEndDate), 'yyyyMM') &&
                    Number(format(new Date(tempEndDate), 'MM')) === idx + 1
              }
              onClick={() => handleMonthSelect(idx + 1)}
            >
              {v}월
            </MonthButton>
          );
        })}
      </MonthGrid>
      <ModalActions>
        <Button state={'default'} content={'취소'} size={'7.6rem'} onClick={handleCancel} />
        <Button
          state={'default'}
          content={'적용'}
          size={'7.6rem'}
          onClick={() => handleAccept(activeInput)}
        />
      </ModalActions>
    </Modal>
  );
};
