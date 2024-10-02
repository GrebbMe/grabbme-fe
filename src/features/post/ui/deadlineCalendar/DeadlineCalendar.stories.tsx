import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DeadlineCalendar } from './DeadlineCalendar';

const meta: Meta<typeof DeadlineCalendar> = {
  title: 'component/features/DeadlineCalendar',
  component: DeadlineCalendar,
};

export default meta;
type Story = StoryObj<typeof DeadlineCalendar>;

const DeadlineCalendarWrapper = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return <DeadlineCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />;
};

export const DeadLineCalendar: Story = {
  render: () => <DeadlineCalendarWrapper />,
};
