import type { Meta, StoryObj } from '@storybook/react';

import { Copyright } from './';

const meta = {
  title: 'Navigation/Copyright',
  component: Copyright,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
} satisfies Meta<typeof Copyright>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};