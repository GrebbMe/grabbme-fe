import { Meta, StoryObj } from '@storybook/react';
import CountLabel from './CountLabel';
import { IcBookmarkSmall, IcChatSmall, IcViewSmall } from '@/shared/assets';
import { StoryContainer, SectionContainer, RowContainer } from '@/shared/ui/storybook/story.style';

const meta: Meta<typeof CountLabel> = {
  title: 'components/shared/CountLabel',
  component: CountLabel,
  args: {
    count: 54,
    hasBorder: true,
    icon: <IcBookmarkSmall />,
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    count: {
      control: { type: 'number' },
    },
    hasBorder: {
      control: { type: 'boolean' },
    },
    icon: {
      control: 'select',
      options: ['bookmark', 'chat', 'view'],
      mapping: {
        bookmark: <IcBookmarkSmall />,
        chat: <IcChatSmall />,
        view: <IcViewSmall />,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'bookmark',
  },
};

export const All: Story = {
  render: () => (
    <StoryContainer>
      <SectionContainer>
        <h3>아이콘 + 개수</h3>
        <RowContainer>
          <CountLabel icon={<IcViewSmall />} count={100} hasBorder={true} />
          <CountLabel icon={<IcBookmarkSmall />} count={54} hasBorder={false} />
          <CountLabel icon={<IcChatSmall />} count={13} hasBorder={true} />
        </RowContainer>
      </SectionContainer>
    </StoryContainer>
  ),
};
