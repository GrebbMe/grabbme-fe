import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import TextField from '@/shared/ui/textfield/TextField';
import { TextFieldProps } from '@/shared/ui/textfield/Textfield.types';

export default {
  title: 'shared/Textfield',
  component: TextField,
  argTypes: {
    value: { control: 'text' },
    size: { control: 'select', options: ['sm', 'lg', 'md'] },
    placeholder: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<TextFieldProps> = (args) => {
  const [value, setValue] = useState(args.value || '');

  return <TextField {...args} value={value} onChange={(newValue) => setValue(newValue)} />;
};

export const Default = Template.bind({});
Default.args = {
  value: '',
  size: 'lg',
  placeholder: '프로젝트명을 작성해주세요.',
};

export const All = () => {
  const [smallValue, setSmallValue] = useState('');
  const [mediumValue, setMediumValue] = useState('');
  const [largeValue, setLargeValue] = useState('');
  const [withValue, setWithValue] = useState('초기 값');

  return (
    <>
      <TextField
        value={smallValue}
        size="sm"
        placeholder="small"
        onChange={(newValue) => setSmallValue(newValue)}
      />
      <TextField
        value={mediumValue}
        size="md"
        placeholder="Medium"
        onChange={(newValue) => setMediumValue(newValue)}
      />
      <TextField
        value={largeValue}
        size="lg"
        placeholder="Large"
        onChange={(newValue) => setLargeValue(newValue)}
      />
      <TextField
        value={withValue}
        size="lg"
        placeholder="입력하세요"
        onChange={(newValue) => setWithValue(newValue)}
      />
    </>
  );
};
