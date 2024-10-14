import { Meta, StoryObj } from '@storybook/react';
import CountLabel from './CountLabel';
import { IcBookmarkSmall, IcChatSmall, IcViewSmall } from '@/shared/assets';
import { StoryContainer, SectionContainer, RowContainer } from '@/shared/ui/storybook/story.style';

const meta: Meta<typeof CountLabel> = {
  title: 'components/shared/CountLabel',
  component: CountLabel,
  argTypes: {
    icon: {
      control: false,
    },
    count: {
      control: { type: 'number' },
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <IcBookmarkSmall />,
    count: 54,
  },
};

export const All: Story = {
  render: () => (
    <StoryContainer>
      <SectionContainer>
        <h3>아이콘 + 개수</h3>
        <RowContainer>
          <CountLabel icon={<IcViewSmall />} count={100} />
          <CountLabel icon={<IcBookmarkSmall />} count={54} />
          <CountLabel icon={<IcChatSmall />} count={13} />
        </RowContainer>
      </SectionContainer>
    </StoryContainer>
  ),
};
