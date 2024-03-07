import type { Meta, StoryObj } from '@storybook/react';

import { Benefit } from './';

const meta = {
  title: 'Content/Benefit',
  component: Benefit,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
} satisfies Meta<typeof Benefit>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Highly accessible',
    description: 'Affordable kits and simple design for all kinds of users',
  },
};