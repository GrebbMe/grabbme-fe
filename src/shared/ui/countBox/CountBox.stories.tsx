import { StoryObj, Meta } from '@storybook/react';
import CountBox, { CountBoxProps } from './CountBox';
import { RowContainer, StoryContainer } from '@/shared/ui/storybook/story.style';

export default {
  title: 'Components/shared/CountBox',
  component: CountBox,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['view', 'bookmark', 'chat'],
      },
    },
    count: {
      control: {
        type: 'number',
      },
    },
  },
} as Meta<typeof CountBox>;

type Story = StoryObj<CountBoxProps>;

export const Default: Story = {
  args: {
    variant: 'view',
    count: 100,
  },
};

export const All: Story = {
  render: () => (
    <div>
      <StoryContainer>
        <RowContainer>
          <CountBox variant="view" count={100} />
          <CountBox variant="bookmark" count={50} />
          <CountBox variant="chat" count={200} />
        </RowContainer>
      </StoryContainer>
    </div>
  ),
};
