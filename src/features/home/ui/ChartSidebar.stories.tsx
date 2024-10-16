import { Meta, StoryObj } from '@storybook/react';
import { ChartSidebar } from './ChartSidebar';

const meta: Meta<typeof ChartSidebar> = {
  title: 'component/home/ChartButton',
  component: ChartSidebar,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ChartSidebar>;

export const Default: Story = {
  args: {},
};
