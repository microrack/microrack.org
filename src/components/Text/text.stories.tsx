import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './';

const meta = {
  title: 'Content/Text',
  component: Text,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 350 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Heading: Story = {
  args: {
    as: 'h1',
    uppercase: true,
    children: 'Microrack',
  },
};

export const Paragraph: Story = {
  args: {
    as: 'p',
    children: 'Long paragraph text goes here and it can be quite long indeed. It is important to test how the text wraps and how it looks with different sizes and weights.',
  },
};

export const Inline: Story = {
  args: {
    as: 'span',
    children: 'Inline text without margins or padding.',
  },
};