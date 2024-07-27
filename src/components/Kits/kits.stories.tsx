import type { Meta, StoryObj } from '@storybook/react';
import {Kits} from './index';
import { KitsProps } from './kits.types';

const meta = {
  title: 'Components/Kits',
  component: Kits,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 1200 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Kits>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: '',
    kitsData: [
      {
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
      },
      {
        "title": "Pedal Starter Kit",
        "earlyPrice": "from $119",
        "fullPrice": "$149",
        "priceSubtitle": "early birds special price",
        "description": "Made specially for processing the sounds of your instrument and voice. Assemble your own modular pedal for expanded performance capabilities!",
        "modules": [
          { "name": "Type C + DC Power", "quantity": 1 },
          { "name": "Input 6.3mm Jack", "quantity": 1 },
          { "name": "Output 6.3mm Jack", "quantity": 1 },
          { "name": "Nonlinearity/Distortion", "quantity": 1 },
          { "name": "Delay", "quantity": 1 },
          { "name": "Envelope Generator (AD/AR)", "quantity": 1 },
          { "name": "Filter", "quantity": 1 },
          { "name": "Clock counter", "quantity": 2 }
        ],
        "imageUri": "/pedal-starter-kit.jpg"
      },
      {
        "title": "Learning Kit",
        "earlyPrice": "from $259",
        "fullPrice": "$289",
        "priceSubtitle": "early birds special price",
        "description": "A rich set of modules for exploring modular synthesis, creating music tracks, and experimenting with sound.",
        "modules": [
          { "name": "Type C + DC Power", "quantity": 1 },
          { "name": "Power Extender", "quantity": 1 },
          { "name": "3.5mm Output jack with Speaker", "quantity": 1 },
          { "name": "6.3mm Jack Input", "quantity": 1 },
          { "name": "Stylus keyboard", "quantity": 1 },
          { "name": "VCO", "quantity": 2 },
          { "name": "Envelope Generator (AD/AR)", "quantity": 2 },
          { "name": "Filter", "quantity": 1 },
          { "name": "Low Pass Gate", "quantity": 1 },
          { "name": "Delay", "quantity": 2 },
          { "name": "Clock Counter", "quantity": 2 },
          { "name": "Noise + Sample & Hold", "quantity": 1 },
          { "name": "Mixer + VCA", "quantity": 2 },
          { "name": "Digital ESP32 Oscilloscope Module", "quantity": 1 }
        ],
        "imageUri": "/learning-kit.jpg"
      },
      {
        "title": "Full Kit",
        "earlyPrice": "from $379",
        "fullPrice": "$399",
        "priceSubtitle": "early birds special price",
        "description": "The most comprehensive set of modules for unleashing creative potential, creating music, and experimenting with sound. Everything we have done is in this set!",
        "modules": [
          { "name": "Type C + DC Power", "quantity": 1 },
          { "name": "Power Extender", "quantity": 1 },
          { "name": "3.5mm Output jack with Speaker", "quantity": 1 },
          { "name": "6.3mm Jack Input", "quantity": 1 },
          { "name": "3.5mm Jack Patch Wire Adapters", "quantity": 4 },
          { "name": "Stylus Keyboard", "quantity": 2 },
          { "name": "Digital ESP32 Pro Module: MIDI-CV, USB Audio/CV, Oscilloscope, MaxMSP Import", "quantity": 1 },
          { "name": "Step Sequencer", "quantity": 2 },
          { "name": "VCO", "quantity": 4 },
          { "name": "Envelope Generator", "quantity": 2 },
          { "name": "Filter", "quantity": 2 },
          { "name": "Delay", "quantity": 2 },
          { "name": "Clock Counter", "quantity": 3 },
          { "name": "Noise + Sample & Hold", "quantity": 1 },
          { "name": "Mixer + VCA", "quantity": 3 },
          { "name": "Low Pass Gate", "quantity": 1 },
          { "name": "Nonlinearity/Distortion", "quantity": 1 },
          { "name": "Equalizer", "quantity": 1 },
          { "name": "Compressor", "quantity": 1 }
        ],
        "imageUri": "/full-kit.jpg"
      },
      {
        "title": "Rack Chassis Addon",
        "earlyPrice": "from $79",
        "fullPrice": "$89",
        "priceSubtitle": "early birds special price",
        "description": "Additional kit for using MICRORACK portably on the go or for installing and connecting MICRORACK modules into your Eurorack system.",
        "modules": [
          { "name": "3.5mm Jack Patch Wire Adapters", "quantity": 4 },
          { "name": "Rack Chassis compatible with Eurorack", "quantity": 1 }
        ],
        "imageUri": "/rack-chassis.jpg"
      },
      {
        "title": "DIY Kit",
        "earlyPrice": "from $79",
        "fullPrice": "$89",
        "priceSubtitle": "early birds special price",
        "description": "A minimal kit for those passionate about electronics and programming, perfect for assembling your own circuits on breadboards. Ideal for experimenting with sound synthesis, effects processing, and creating unique audio devices.",
        "modules": [
          { "name": "Type C + DC Power", "quantity": 1 },
          { "name": "3.5mm Output jack with Speaker", "quantity": 1 },
          { "name": "Digital ESP32 Pro Module: MIDI-CV, USB Audio/CV, Oscilloscope, MaxMSP Import", "quantity": 1 },
          { "name": "VCO 2", "quantity": 1 }
        ],
        "imageUri": "/images/diy.jpg"
      }
    ],
  },
};
