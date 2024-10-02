import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import TextField from '@/shared/ui/input/TextField';
import { TextFieldProps } from '@/shared/ui/input/TextFieled.types';

export default {
  title: 'component/shared/textfield',
  component: TextField,
} as Meta;

const Template: StoryFn<TextFieldProps> = (args) => {
  const [value, setValue] = useState(args.value || '');

  return <TextField {...args} value={value} onChange={(newValue) => setValue(newValue)} />;
};

export const Default = Template.bind({});
Default.args = {
  label: (
    <span>
      프로젝트명 <span style={{ color: '#F14F1F' }}>*</span>
    </span>
  ),
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
        label="sm"
        value={smallValue}
        size="sm"
        placeholder="small"
        onChange={(newValue) => setSmallValue(newValue)}
      />
      <TextField
        label="md"
        value={mediumValue}
        size="md"
        placeholder="Medium"
        onChange={(newValue) => setMediumValue(newValue)}
      />
      <TextField
        label="lg"
        value={largeValue}
        size="lg"
        placeholder="Large"
        onChange={(newValue) => setLargeValue(newValue)}
      />
      <TextField
        label="Value"
        value={withValue}
        size="lg"
        placeholder="입력하세요"
        onChange={(newValue) => setWithValue(newValue)}
      />
    </>
  );
};
