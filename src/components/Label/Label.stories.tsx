import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: 'Form Label', disabled: false, backgroundColor: '#f0f4f8'
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Label', disabled: true, backgroundColor: '#cccccc'
  },
};
