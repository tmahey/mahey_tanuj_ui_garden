import type { Meta, StoryObj } from '@storybook/react';
import { TableFooter } from './TableFooter';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/TableFooter',
  component: TableFooter,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
  args: {
    children: <tr><td>Total: 100</td></tr>, disabled: false, backgroundColor: '#f9fafb'
  },
};

export const Disabled: Story = {
  args: {
    children: <tr><td>Total: 100</td></tr>, disabled: true, backgroundColor: '#cccccc'
  },
};
