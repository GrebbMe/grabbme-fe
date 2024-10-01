import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SelectList } from '@/shared/ui';
import { SelectListItem, SelectListProps } from '@/shared/ui/select/SelectList';

const meta: Meta<SelectListProps> = {
  title: 'component/shared/select',
  component: SelectList,
  argTypes: {
    items: {
      control: 'object',
      description: '리스트 목록',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '드롭다운 길이',
    },
  },
};
export default meta;
type Story = StoryObj<SelectListProps>;

export const SmallSelectList: Story = {
  args: {
    items: [
      { value: '1', display: '1-2년차' },
      { value: '2', display: '3-5년차' },
      { value: '3', display: '5-7년차' },
    ],
    size: 'sm',
    selected: null,
  },
  render: function Render(args: SelectListProps) {
    const [selected, setSelected] = useState<SelectListItem | null>(null);
    return <SelectList {...args} selected={selected} onChange={setSelected} />;
  },
};

export const MediumSelectList: Story = {
  args: {
    items: [
      { value: '1', display: '1-2년차' },
      { value: '2', display: '3-5년차' },
      { value: '3', display: '5-7년차' },
    ],
    size: 'md',
  },
  render: function Render(args: SelectListProps) {
    const [selected, setSelected] = useState<SelectListItem | null>(null);
    return <SelectList {...args} selected={selected} onChange={setSelected} />;
  },
};

export const LargeSelectList: Story = {
  args: {
    items: [
      { value: '1', display: '1-2년차' },
      { value: '2', display: '3-5년차' },
      { value: '3', display: '5-7년차' },
    ],
    size: 'lg',
  },
  render: function Render(args: SelectListProps) {
    const [selected, setSelected] = useState<SelectListItem | null>(null);
    return <SelectList {...args} selected={selected} onChange={setSelected} />;
  },
};
