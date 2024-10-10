import { Meta, StoryObj } from '@storybook/react';
import { StackBadge } from './StackBadge';
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
} from '@/shared/assets/svg/stack/index';

const meta: Meta<typeof StackBadge> = {
  title: 'component/home/StackSelectButton',
  component: StackBadge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    stackName: { type: 'string' },
    stackImg: { type: 'string' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stackName: 'Default',
    stackImg: `${IcReact}`,
  },
};

export const All: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <StackBadge stackImg={`${IcReact}`} stackName={`React`} onClick={() => {}} />
      <StackBadge stackImg={`${IcNodejs}`} stackName={`Node.js`} onClick={() => {}} />
      <StackBadge stackImg={`${IcNestjs}`} stackName={`NestJS`} onClick={() => {}} />
      <StackBadge stackImg={`${IcSpring}`} stackName={`Spring`} onClick={() => {}} />
      <StackBadge stackImg={`${IcDjango}`} stackName={`Django`} onClick={() => {}} />
      <StackBadge stackImg={`${IcFlutter}`} stackName={`Flutter`} onClick={() => {}} />
      <StackBadge stackImg={`${IcVue}`} stackName={`Vue`} onClick={() => {}} />
      <StackBadge stackImg={`${IcRust}`} stackName={`Rust`} onClick={() => {}} />
      <StackBadge stackImg={`${IcSwift}`} stackName={`Swift`} onClick={() => {}} />
      <StackBadge stackImg={`${IcKotlin}`} stackName={`Kotlin`} onClick={() => {}} />
    </div>
  ),
};
