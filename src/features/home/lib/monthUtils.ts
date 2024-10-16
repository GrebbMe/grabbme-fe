import { addMonths, subMonths } from 'date-fns';

export const handleAddMonth = (yearMonthDate: Date): Date => {
  const newDate: Date = addMonths(yearMonthDate, 1);

  return newDate;
};

export const handleSubMonth = (yearMonthDate: Date): Date => {
  const newDate: Date = subMonths(yearMonthDate, 1);

  return newDate;
};
