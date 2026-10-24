import type { Meta, StoryObj } from '@storybook/react';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    title: 'Welcome Banner', subtitle: 'Leading the future', disabled: false, backgroundColor: '#2c3e50'
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Banner', subtitle: 'Service offline', disabled: true, backgroundColor: '#cccccc'
  },
};
