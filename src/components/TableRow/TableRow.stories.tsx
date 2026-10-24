import type { Meta, StoryObj } from '@storybook/react';
import { TableRow } from './TableRow';

const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow',
  component: TableRow,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: {
    children: <td>Row content</td>, disabled: false, backgroundColor: '#ffffff'
  },
};

export const Disabled: Story = {
  args: {
    children: <td>Row content</td>, disabled: true, backgroundColor: '#cccccc'
  },
};
