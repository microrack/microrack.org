import type { Meta, StoryObj } from '@storybook/react';

import {Dots} from './';

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
    dotSpacing: 14
  }
};

export const Interactive: Story = {
  args: {
    dotSize: 3,
    dotSpacing: 14,
    interactive: true,
    influenceRadius: 100
  }
};