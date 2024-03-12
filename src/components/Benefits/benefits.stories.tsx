import type { Meta, StoryObj } from '@storybook/react';

import { Benefits } from './';
import benefits from './benefits.json';


const meta = {
  title: 'Content/Benefits',
  component: Benefits,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
} satisfies Meta<typeof Benefits>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    benefits
  },
};