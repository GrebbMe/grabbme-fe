import { Meta } from '@storybook/react';
import React, { useState } from 'react';
import { MultipleSelectList, SelectItem } from './MultipleSelectList';

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

const meta: Meta<typeof MultipleSelectList> = {
  title: 'shared/MultipleSelectList',
  component: MultipleSelectList,
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
  return (
    <MultipleSelectList
      placeholder="선택"
      items={example}
      selectedItems={selectedItems}
      onSelect={setSelectedItems}
      selectLimit={5}
    />
  );
};

export const All = () => {
  const [selectedItems, setSelectedItems] = useState<SelectItem[]>([]);
  const [selectedItems2, setSelectedItems2] = useState<SelectItem[]>([]);
  return (
    <div>
      스택선택
      <MultipleSelectList
        placeholder="기술 스택 선택"
        items={example}
        selectedItems={selectedItems}
        onSelect={setSelectedItems}
        selectLimit={5}
      />
      <br />
      <br />
      <br />
      카테고리선택
      <MultipleSelectList
        placeholder="카테고리 선택"
        items={example}
        selectedItems={selectedItems2}
        onSelect={setSelectedItems2}
        selectLimit={3}
      />
    </div>
  );
};
