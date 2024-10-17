import { Meta, StoryObj } from '@storybook/react';
import ClosingProject from './ClosingProject';

const meta: Meta<typeof ClosingProject> = {
  title: 'component/features/ClosingProject',
  component: ClosingProject,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '테스트를 위한 프로젝트명',
    positions: ['프론트엔드 개발자', '백엔드 개발자'],
    dueDay: '1',
  },
};
