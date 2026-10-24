import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: 'Default Button', disabled: false, backgroundColor: '#007bff'
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Button', disabled: true, backgroundColor: '#cccccc'
  },
};
