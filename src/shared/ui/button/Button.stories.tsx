import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  IcBookmark,
  IcChat,
  IcChatGithub,
  IcChatStart,
  IcClose,
  IcList,
  IcLoginGithub,
  IcPhoto,
  IcSend,
} from '@/shared/assets';
import { Button } from '@/shared/ui';
import { StoryContainer, SectionContainer, RowContainer } from '@/shared/ui/storybook/story.style';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'circle', 'inactivePrimary', 'inactiveSecondary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'lg'],
      control: { type: 'radio' },
    },
    children: { control: { type: 'text' } },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '버튼',
    variant: 'primary',
    size: 'sm',
  },
};

export const All: Story = {
  render: () => (
    <StoryContainer>
      <SectionContainer>
        <h3>기본 버튼</h3>
        <RowContainer>
          <Button variant="primary" size="sm">
            버튼
          </Button>
          <Button variant="primary" size="sm" icon={<IcBookmark />}>
            북마크
          </Button>
          <Button variant="primary" size="sm" icon={<IcList />}>
            목록으로
          </Button>
          <Button variant="primary" size="sm" icon={<IcLoginGithub />}>
            로그인
          </Button>
          <Button variant="primary" size="sm" icon={<IcChatStart />}>
            채팅하기
          </Button>
          <Button variant="primary" size="lg">
            확인
          </Button>
        </RowContainer>
      </SectionContainer>
      <SectionContainer>
        <h3>채팅 버튼</h3>
        <RowContainer>
          <Button variant="circle" size="lg" icon={<IcChat />} />
          <Button variant="circle" size="lg" icon={<IcClose />} />
        </RowContainer>
      </SectionContainer>
      <SectionContainer>
        <h3>채팅 전송 버튼</h3>
        <RowContainer>
          <Button variant="circle" size="sm" icon={<IcSend />} />
          <Button variant="circle" size="sm" icon={<IcPhoto />} />
          <Button variant="circle" size="sm" icon={<IcChatGithub />} />
        </RowContainer>
      </SectionContainer>

      <SectionContainer>
        <h3>완료 버튼(클릭 안됨)</h3>
        <RowContainer>
          <Button variant="inactivePrimary" size="sm">
            신청 완료
          </Button>
          <Button variant="inactiveSecondary" size="sm">
            모집 완료
          </Button>
        </RowContainer>
      </SectionContainer>
    </StoryContainer>
  ),
};
