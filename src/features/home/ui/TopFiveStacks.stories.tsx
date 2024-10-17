import { Meta, StoryObj } from '@storybook/react';
import TopFiveStacks from './TopFiveStacks';

const meta: Meta<typeof TopFiveStacks> = {
  title: 'component/features/TopFiveStacks',
  component: TopFiveStacks,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
