import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select } from '@/shared/ui';
import { SelectListItem, SelectListProps } from '@/shared/ui/select/Select';

const meta: Meta<SelectListProps> = {
  title: 'shared/Select',
  component: Select,
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
    placeholder: {
      control: 'text',
      description: '선택된 값이 없을 때 보여질 문구',
    },
  },
};
export default meta;
type Story = StoryObj<SelectListProps>;

export const Default: Story = {
  args: {
    items: [
      { id: 1, label: '1-2년차' },
      { id: 2, label: '3-5년차' },
      { id: 3, label: '5-7년차' },
    ],
    size: 'lg',
    placeholder: '선택',
  },
  render: function Render(args: SelectListProps) {
    const [selected, setSelected] = useState<SelectListItem | null>(null);
    const handleItemClick = (item: SelectListItem) => {
      setSelected(item);
    };

    return <Select {...args} selected={selected} onChangeSelected={handleItemClick} />;
  },
};

export const All: Story = {
  args: {
    items: [
      { id: 1, label: '1-2년차' },
      { id: 2, label: '3-5년차' },
      { id: 3, label: '5-7년차' },
    ],
    size: 'md',
    placeholder: '선택',
  },
  render: function Render(args: SelectListProps) {
    const [smallSelected, setSmallSelected] = useState<SelectListItem | null>(null);
    const [mediumSelected, setMediumSelected] = useState<SelectListItem | null>(null);
    const [LargeSelected, setLargeSelected] = useState<SelectListItem | null>(null);

    const handleSmallSelect = (item: SelectListItem) => {
      setSmallSelected(item);
    };
    const handleMediumSelect = (item: SelectListItem) => {
      setMediumSelected(item);
    };
    const handleLargeSelect = (item: SelectListItem) => {
      setLargeSelected(item);
    };

    return (
      <>
        <Select
          {...args}
          size={'sm'}
          selected={smallSelected}
          onChangeSelected={handleSmallSelect}
        />
        <br />
        <Select
          {...args}
          size={'md'}
          selected={mediumSelected}
          onChangeSelected={handleMediumSelect}
        />
        <br />
        <Select
          {...args}
          size={'lg'}
          selected={LargeSelected}
          onChangeSelected={handleLargeSelect}
        />
      </>
    );
  },
};
