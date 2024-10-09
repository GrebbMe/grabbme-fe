import { Meta, StoryObj } from '@storybook/react';
import { StackSelectButton } from './StackSelectButton';
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

const React: Story = {
  args: {
    children: 'React',
    src: IcReact,
  },
};

const NodeJS: Story = {
  args: {
    children: 'Node.js',
    src: IcNodejs,
  },
};

const NestJS: Story = {
  args: {
    children: 'NestJS.js',
    src: IcNestjs,
  },
};

const Spring: Story = {
  args: {
    children: 'Spring',
    src: IcSpring,
  },
};

const Django: Story = {
  args: {
    children: 'Django',
    src: IcDjango,
  },
};

const Flutter: Story = {
  args: {
    children: 'Flutter',
    src: IcFlutter,
  },
};

const Vue: Story = {
  args: {
    children: 'Vue',
    src: IcVue,
  },
};

const Rust: Story = {
  args: {
    children: 'Rust',
    src: IcRust,
  },
};

const Swift: Story = {
  args: {
    children: 'Swift',
    src: IcSwift,
  },
};

const Kotlin: Story = {
  args: {
    children: 'Kotlin',
    src: IcKotlin,
  },
};

export const Default: Story = {
  args: {
    children: 'Default',
    src: IcReact,
  },
};

export const All: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <StackSelectButton {...React.args}>React</StackSelectButton>
      <StackSelectButton {...NodeJS.args}>Node.js</StackSelectButton>
      <StackSelectButton {...NestJS.args}>NestJS</StackSelectButton>
      <StackSelectButton {...Spring.args}>Spring</StackSelectButton>
      <StackSelectButton {...Django.args}>Django</StackSelectButton>
      <StackSelectButton {...Flutter.args}>Flutter</StackSelectButton>
      <StackSelectButton {...Vue.args}>Vue</StackSelectButton>
      <StackSelectButton {...Rust.args}>Rust</StackSelectButton>
      <StackSelectButton {...Swift.args}>Swift</StackSelectButton>
      <StackSelectButton {...Kotlin.args}>Kotlin</StackSelectButton>
    </div>
  ),
};
