import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
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
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
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