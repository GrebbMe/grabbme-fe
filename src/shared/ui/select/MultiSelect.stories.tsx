import { Meta } from '@storybook/react';
import { useState } from 'react';
import { MultiSelect, SelectItem } from './MultiSelect';

const example = [
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

const meta: Meta<typeof MultiSelect> = {
  title: 'components/shared/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    items: { control: 'object' },
    selectLimit: { control: 'number' },
    placeholder: { control: 'text' },
  },
  args: {
    items: example,
    selectLimit: 5,
    placeholder: '선택',
  },
};

export default meta;

export const Default = () => {
  const [selectedItems, setSelectedItems] = useState<SelectItem[]>([]);
  const handleSelect = (selectedItems: SelectItem[]) => {
    setSelectedItems(selectedItems);
  };

  return (
    <MultiSelect
      placeholder="선택"
      items={example}
      selectedItems={selectedItems}
      onClickSelectedItems={handleSelect}
      selectLimit={5}
    />
  );
};

export const All = () => {
  const [selectedCategoryItems, setSelectedCategoryItems] = useState<SelectItem[]>([]);
  const [selectedStackItems, setSelectedStackItems] = useState<SelectItem[]>([]);

  const handleCategorySelect = (selectedItems: SelectItem[]) => {
    setSelectedCategoryItems(selectedItems);
  };
  const handleStackSelect = (selectedItems: SelectItem[]) => {
    setSelectedStackItems(selectedItems);
  };

  return (
    <div>
      스택선택
      <MultiSelect
        placeholder="기술 스택 선택"
        items={example}
        selectedItems={selectedStackItems}
        onClickSelectedItems={handleStackSelect}
        selectLimit={5}
      />
      <br />
      <br />
      <br />
      카테고리선택
      <MultiSelect
        placeholder="카테고리 선택"
        items={example}
        selectedItems={selectedCategoryItems}
        onClickSelectedItems={handleCategorySelect}
        selectLimit={3}
      />
    </div>
  );
};
