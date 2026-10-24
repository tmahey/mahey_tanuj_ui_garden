import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    children: <tbody><tr><td>Sample Data Cell</td></tr></tbody>, disabled: false, backgroundColor: '#ffffff'
  },
};

export const Disabled: Story = {
  args: {
    children: <tbody><tr><td>Disabled Data Cell</td></tr></tbody>, disabled: true, backgroundColor: '#cccccc'
  },
};
