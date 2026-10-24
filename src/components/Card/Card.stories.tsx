import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Feature Card', content: 'Details here', disabled: false, backgroundColor: '#ffffff'
  },
};

export const Disabled: Story = {
  args: {
    title: 'Inactive Card', content: 'Unavailable', disabled: true, backgroundColor: '#cccccc'
  },
};
