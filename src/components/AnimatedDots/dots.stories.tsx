import type { Meta, StoryObj } from '@storybook/react';

import Dots from './';

const meta = {
  title: 'Graphics/Dots',
  component: Dots,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs']
} satisfies Meta<typeof Dots>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};