import type { Meta, StoryObj } from '@storybook/react';
import send from '@/shared/assets/iconamoon_send.svg';
import github from '@/shared/assets/mingcute_github-line.svg';
import image from '@/shared/assets/tabler_photo.svg';
import { ChatFeatureButton } from '@/shared/ui/button/ChatFeatureButton';
const meta: Meta<typeof ChatFeatureButton> = {
  title: 'component/shared/button',
  component: ChatFeatureButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    img: {
      control: 'text',
    },
  },
} satisfies Meta<typeof ChatFeatureButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GithubChatButton: Story = {
  args: {
    img: github,
  },
};

export const ImageChatButton: Story = {
  args: {
    img: image,
  },
};

export const SendButtonWithIcon: Story = {
  args: {
    img: send,
  },
};
