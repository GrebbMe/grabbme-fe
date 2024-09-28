import { Meta, StoryObj } from '@storybook/react';
import { BookmarkButton } from '@/shared/ui/button/BookmarkButton';

const meta: Meta<typeof BookmarkButton> = {
  title: 'component/shared/button',
  component: BookmarkButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    onClick: () => {},
  },
} satisfies Meta<typeof BookmarkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultBookmarkButton: Story = {};
