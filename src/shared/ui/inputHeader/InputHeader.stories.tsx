import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import InputHeader, { InputHeaderProps } from '@/shared/ui/inputHeader/InputHeader';
import TextField from '@/shared/ui/textfield/TextField';

export default {
  title: 'shared/InputHeader',
  component: InputHeader,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: { control: 'text' },
    description: { control: 'text' },
    isDetail: { control: 'boolean' },
    isCountable: { control: 'boolean' },
    limit: { control: 'number' },
  },
} as Meta;

const Template: StoryFn<InputHeaderProps> = (args) => {
  return (
    <div style={{ width: '80.8rem' }}>
      <InputHeader {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  text: '제목',
  description: '설명',
  isDetail: true,
  isCountable: true,
  limit: 10,
};

export const All = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <InputHeader text="희망 직군" isCountable={false} limit={50} count={value.length} />
      <br />
      <div style={{ width: '80.8rem' }}>
        <InputHeader
          text="기술스택"
          isDetail={false}
          isCountable={true}
          limit={3}
          count={value.length}
        />
      </div>
      <br />
      <div style={{ width: '80.8rem' }}>
        <InputHeader
          text="제목"
          description="글 작성하세요."
          isCountable={true}
          limit={50}
          count={value.length}
        />
      </div>
      <TextField
        value={value}
        size="lg"
        placeholder="입력"
        onChange={(newValue) => setValue(newValue)}
      />
    </>
  );
};
