import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import InputHeader, { InputHeaderProps } from '@/shared/ui/inputHeader/InputHeader';
import { MultiSelect, SelectItem } from '@/shared/ui/select/MultiSelect';
import { Select, SelectListItem } from '@/shared/ui/select/Select';
import TextField from '@/shared/ui/textfield/TextField';

const SELECT_ITEM = [
  { value: '1', label: '1-2년차' },
  { value: '2', label: '3-5년차' },
  { value: '3', label: '5-7년차' },
];
const MULTI_SELECT = [
  { id: 1, item: 'Svelte' },
  { id: 2, item: 'Bootstrap' },
  { id: 3, item: 'NestJs' },
  { id: 4, item: 'Express' },
  { id: 5, item: 'Django' },
  { id: 6, item: 'Spring Boot' },
  { id: 7, item: 'Laravel' },
  { id: 8, item: 'Fast API' },
  { id: 9, item: 'Flask' },
  { id: 10, item: 'Node.js' },
  { id: 11, item: 'MySQL' },
  { id: 12, item: 'PostgreSQL' },
  { id: 13, item: 'Docker' },
  { id: 14, item: 'Ruby on Rails' },
  { id: 15, item: 'ElasticSearch' },
  { id: 16, item: 'Terraform' },
  { id: 17, item: 'GraphQL' },
];

const meta: Meta<typeof InputHeader> = {
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
};

export default meta;

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
  const [select, setSelect] = useState<SelectListItem | null>(null);
  const [selectedItems, setSelectedItems] = useState<SelectItem[]>([]);
  const handleSelect = (selectedItems: SelectItem[]) => {
    setSelectedItems(selectedItems);
  };

  return (
    <>
      <InputHeader text="개발 경력" isCountable={false} isDetail={false} />

      <InputHeader text="개발 경력" isCountable={false} />
      <Select items={SELECT_ITEM} size={'lg'} selected={select} onChangeSelected={setSelect} />

      <br />
      <div style={{ width: '80.8rem' }}>
        <InputHeader
          text="카테고리"
          description="카테고리를 최대 3개 선택하세요."
          isDetail={true}
          isCountable={true}
          limit={3}
          count={value.length}
        />
        <MultiSelect
          placeholder="선택"
          items={MULTI_SELECT}
          selectedItems={selectedItems}
          onClickSelectedItems={handleSelect}
          selectLimit={5}
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
