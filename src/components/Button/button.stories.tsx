import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './';

const meta = {
  title: 'Controls/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'string' }
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonExample: Story = {
  args: {
    variant: 'action',
    text: 'Join the waitlist',
  },
};

export const LinkExample: Story = {
  args: {
    text: 'View on GitHub',
    href: '#link'
  },
};
