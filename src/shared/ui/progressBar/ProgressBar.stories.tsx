import { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from '@/shared/ui/progressBar/ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'component/shared/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    totalCnt: { type: 'number' },
    acceptedCnt: { type: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    totalCnt: 1,
    acceptedCnt: 1,
  },
};

export const All: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
      <ProgressBar totalCnt={3} acceptedCnt={1} />
      <ProgressBar totalCnt={5} acceptedCnt={3} />
      <ProgressBar totalCnt={6} acceptedCnt={6} />
    </div>
  ),
};
