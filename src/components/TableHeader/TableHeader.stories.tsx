import type { Meta, StoryObj } from '@storybook/react';
import { TableHeader } from './TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/TableHeader',
  component: TableHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: {
    children: <tr><th>Col 1</th><th>Col 2</th></tr>, disabled: false, backgroundColor: '#f4f6f8'
  },
};

export const Disabled: Story = {
  args: {
    children: <tr><th>Col 1</th><th>Col 2</th></tr>, disabled: true, backgroundColor: '#cccccc'
  },
};
