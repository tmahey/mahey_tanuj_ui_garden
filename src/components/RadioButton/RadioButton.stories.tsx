import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: 'Accept Terms', disabled: false, backgroundColor: '#f8f9fa'
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Option', disabled: true, backgroundColor: '#cccccc'
  },
};
