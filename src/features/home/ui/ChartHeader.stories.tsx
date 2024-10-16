import { Meta, StoryObj } from '@storybook/react';
import ChartHeader from './ChartHeader';

const meta: Meta<typeof ChartHeader> = {
  title: 'component/features/ChartHeader',
  component: ChartHeader,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: { type: 'string' },
    description: { type: 'string' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const StackHeader: Story = {
  args: {
    title: '최근 인기 스택',
    description: 'GrabbMe에서 가장 많이 지원하는 인기있는 개발 스택을 확인해보세요.',
  },
};

export const ApplicationHeader: Story = {
  args: {
    title: '누적 지원 횟수',
    description: 'GrabbMe에서 매일 많은 지원자들이 프로젝트에 지원하고 있어요.',
  },
};
