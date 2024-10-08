import { Meta, StoryObj } from '@storybook/react';
import { StackSelectButton } from './index';
import {
  IcNodejs,
  IcReact,
  IcNestjs,
  IcSpring,
  IcDjango,
  IcFlutter,
  IcVue,
  IcRust,
  IcSwift,
  IcKotlin,
} from '@/shared/assets/svg/stack';

const meta: Meta<typeof StackSelectButton> = {
  title: 'component/home/StackSelectButton',
  component: StackSelectButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
    src: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Stack: Story[] = [
  {
    args: {
      children: 'React',
      src: IcReact,
    },
  },
  {
    args: {
      children: 'Node.js',
      src: IcNodejs,
    },
  },
  {
    args: {
      children: 'NestJS.js',
      src: IcNestjs,
    },
  },
  {
    args: {
      children: 'Spring',
      src: IcSpring,
    },
  },
  {
    args: {
      children: 'Django',
      src: IcDjango,
    },
  },
  {
    args: {
      children: 'Flutter',
      src: IcFlutter,
    },
  },
  {
    args: {
      children: 'Vue',
      src: IcVue,
    },
  },
  {
    args: {
      children: 'Rust',
      src: IcRust,
    },
  },
  {
    args: {
      children: 'Swift',
      src: IcSwift,
    },
  },
  {
    args: {
      children: 'Kotlin',
      src: IcKotlin,
    },
  },
];

export const Default: Story = {
  args: {
    children: 'Default',
    src: IcReact,
  },
};

export const All: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {Stack.map((item) => (
        <StackSelectButton {...item.args}>React</StackSelectButton>
      ))}
    </div>
  ),
};
