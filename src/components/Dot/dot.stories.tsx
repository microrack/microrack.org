import type { Meta, StoryObj } from '@storybook/react';

import Dot from './';

const meta = {
  title: 'Graphics/Dot',
  component: Dot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
} satisfies Meta<typeof Dot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    x: 100,
    y: 100,
    dotSize: 4
  }
};