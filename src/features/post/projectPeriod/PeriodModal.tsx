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
  onSelectMonth: (month: number) => void;
  onPrevYear: (activeInput: ActiveInputType) => void;
  onNextYear: (activeInput: ActiveInputType) => void;
  onCancel: () => void;
  onAccept: (activeInput: ActiveInputType) => void;
  tempSyncStartDate: Date;
  setTempSyncStartDate: (date: Date) => void;
  tempSyncEndDate: Date;
  setTempSyncEndDate: (date: Date) => void;
}

export const PeriodModal = ({
  activeInput,
  tempStartDate,
  tempEndDate,
  onSelectMonth,
  onPrevYear,
  onNextYear,
  onCancel,
  onAccept,
  tempSyncStartDate,
  tempSyncEndDate,
}: PeriodModalProps) => {
  return (
    <Modal>
      <ModalHeader>
        <IconBox onClick={() => onPrevYear(activeInput)}>
          <IcArrowLeft />
        </IconBox>
        <YearStyle>
          {format(activeInput === 'start' ? tempStartDate : tempEndDate, 'yyyy년')}
        </YearStyle>
        <IconBox onClick={() => onNextYear(activeInput)}>
          <IcArrowRight />
        </IconBox>
      </ModalHeader>
      <MonthGrid>
        {MONTHS.map((month) => {
          return (
            <MonthButton
              key={month}
              $isSelected={
                activeInput === 'start'
                  ? format(new Date(tempStartDate), 'yyyyMM') ===
                      format(new Date(tempSyncStartDate), 'yyyyMM') &&
                    Number(format(new Date(tempStartDate), 'MM')) === month
                  : format(new Date(tempEndDate), 'yyyyMM') ===
                      format(new Date(tempSyncEndDate), 'yyyyMM') &&
                    Number(format(new Date(tempEndDate), 'MM')) === month
              }
              onClick={() => onSelectMonth(month)}
            >
              {month}월
            </MonthButton>
          );
        })}
      </MonthGrid>
      <ModalActions>
        <Button state={'default'} content={'취소'} size={'7.6rem'} onClick={onCancel} />
        <Button
          state={'default'}
          content={'적용'}
          size={'7.6rem'}
          onClick={() => onAccept(activeInput)}
        />
      </ModalActions>
    </Modal>
  );
};
