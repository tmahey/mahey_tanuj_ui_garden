import type { Meta, StoryObj } from '@storybook/react';
import { TableCell } from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Components/TableCell',
  component: TableCell,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  args: {
    children: 'Active Cell Content', disabled: false, backgroundColor: '#ffffff'
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Cell Content', disabled: true, backgroundColor: '#cccccc'
  },
};
