import { Meta, StoryObj } from '@storybook/react';
import IcBookmark from '@/shared/assets/svg/IcBookmark.svg?react';
import IcList from '@/shared/assets/svg/IcList.svg?react';
import { Button } from '@/shared/ui/button/Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
  args: {
    children: '버튼',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '버튼',
  },
};

export const All: Story = {
  render: (args) => (
    <div>
      <h3>모든 버튼</h3>
      <div style={{ marginBottom: '1rem' }}>
        <Button {...args} icon={<IcBookmark />} iconType="bookmark">
          북마크
        </Button>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <Button {...args} icon={<IcList />} iconType="list">
          목록으로
        </Button>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <Button {...args} disabled>
          모집 완료
        </Button>
      </div>
    </div>
  ),
};
