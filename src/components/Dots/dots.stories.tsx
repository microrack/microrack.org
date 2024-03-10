import type { Meta, StoryObj } from '@storybook/react';

import Dots from './';

const meta = {
  title: 'Graphics/Dots',
  component: Dots,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs']
} satisfies Meta<typeof Dots>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dotSize: 3,
    width: 300,
    height: 100,
    dotSpacing: 16
  }
};

export const Interactive: Story = {
  args: {
    dotSize: 3,
    width: 300,
    height: 100,
    dotSpacing: 16,
    interactive: true,
    influenceRadius: 100
  }
};