import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    content: 'Clean body text for articles.', disabled: false, backgroundColor: '#ffffff'
  },
};

export const Disabled: Story = {
  args: {
    content: 'Greyed out body text.', disabled: true, backgroundColor: '#cccccc'
  },
};
