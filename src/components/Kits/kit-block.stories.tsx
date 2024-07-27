import type { Meta, StoryObj } from '@storybook/react';
import KitBlock from './kit-block';
import { KitType } from './kits.types';

const meta = {
  title: 'Components/KitBlock',
  component: KitBlock,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KitBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: {
      "title": "Synth Starter Kit",
      "earlyPrice": "from $119",
      "fullPrice": "$149",
      "priceSubtitle": "early birds special price",
      "description": "Our most portable and affordable kit for synth beginners. Small but mighty, this kit provides all the essential modules to start your journey into the world of modular synthesis.",
      "modules": [
        { "name": "Type C + DC Power", "quantity": 1 },
        { "name": "3.5mm Output jack with Speaker", "quantity": 1 },
        { "name": "VCO", "quantity": 1 },
        { "name": "Envelope generator (AD/AR)", "quantity": 1 },
        { "name": "Filter", "quantity": 1 },
        { "name": "Delay", "quantity": 1 },
        { "name": "Stylus keyboard", "quantity": 1 },
        { "name": "Clock counter", "quantity": 1 },
        { "name": "Noise + Sample & Hold", "quantity": 1 }
      ],
      "imageUri": "/synth-starter-kit.jpg"
    }
  }
};
