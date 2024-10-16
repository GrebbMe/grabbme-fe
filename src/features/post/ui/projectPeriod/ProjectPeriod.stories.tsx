import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ProjectPeriod, ProjectPeriodProps } from './ProjectPeriod';

const meta: Meta<ProjectPeriodProps> = {
  title: 'component/features/ProjectPeriod',
  component: ProjectPeriod,
};
export default meta;

type Story = StoryObj<typeof ProjectPeriod>;

const ProjectPeriodWrapper = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <ProjectPeriod
      startDate={startDate}
      endDate={endDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
};

export const Projectperiod: Story = {
  render: () => <ProjectPeriodWrapper />,
};
