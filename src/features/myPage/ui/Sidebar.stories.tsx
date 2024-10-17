import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './Sidebar';
import { StoryContainer, SectionContainer } from '@/shared/ui/storybook/story.style';

const meta: Meta<typeof Sidebar> = {
  title: 'components/features/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <BrowserRouter>
      <StoryContainer>
        <SectionContainer>
          <h3>마이페이지 사이드바</h3>
          <Sidebar />
        </SectionContainer>
      </StoryContainer>
    </BrowserRouter>
  ),
};
