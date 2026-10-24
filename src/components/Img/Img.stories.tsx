import type { Meta, StoryObj } from '@storybook/react';
import { Img } from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    alt: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    alt: 'Product image', disabled: false, backgroundColor: '#eaecef'
  },
};

export const Disabled: Story = {
  args: {
    alt: 'Disabled image', disabled: true, backgroundColor: '#cccccc'
  },
};
