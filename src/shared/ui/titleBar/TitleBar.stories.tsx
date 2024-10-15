import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import { MultiSelect, SelectItem } from '@/shared/ui/select/MultiSelect';
import { Select, SelectListItem } from '@/shared/ui/select/Select';
import TextField from '@/shared/ui/textfield/TextField';
import TitleBar, { TitleBarProps } from '@/shared/ui/titleBar/TitleBar';

const SELECT_ITEM = [
  { id: 1, label: '1-2년차' },
  { id: 2, label: '3-5년차' },
  { id: 3, label: '5-7년차' },
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

const meta: Meta<typeof TitleBar> = {
  title: 'components/shared/TitleBar',
  component: TitleBar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    limit: { control: 'number' },
    size: { control: 'select', options: ['sm', 'lg'] },
  },
};

export default meta;

const Template: StoryFn<TitleBarProps> = (args) => {
  return (
    <div style={{ width: '80.8rem' }}>
      <TitleBar {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: '제목',
  description: '설명',
  limit: 10,
  size: 'lg',
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
      <TitleBar label="개발 경력" size="lg" />
      <br />
      <TitleBar label="개발 경력" size="lg" />
      <Select
        items={SELECT_ITEM}
        size={'lg'}
        selected={select}
        placeholder="선택"
        onChangeSelected={setSelect}
      />

      <br />
      <TitleBar
        label="기술스택"
        description="기술스택을 최대 5개 선택하세요."
        limit={5}
        count={selectedItems.length}
        size="lg"
      />
      <MultiSelect
        placeholder="선택"
        items={MULTI_SELECT}
        selectedItems={selectedItems}
        onClickSelectedItems={handleSelect}
        selectLimit={5}
      />
      <br />
      <TitleBar
        label="제목"
        description="글 작성하세요."
        limit={50}
        count={value.length}
        size="lg"
      />
      <TextField
        value={value}
        size="lg"
        placeholder="입력"
        onChange={(newValue) => setValue(newValue)}
      />
    </>
  );
};
