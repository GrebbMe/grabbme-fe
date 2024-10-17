import { Meta, StoryObj } from '@storybook/react';
import BubbleChart from './BubbleChart';

const meta: Meta<typeof BubbleChart> = {
  title: 'component/features/BubbleChart',
  component: BubbleChart,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof BubbleChart>;

export const Default: Story = {
  args: {},
};
