import type { Meta, StoryObj } from '@storybook/react';

import benefits from '../Benefits/benefits.json';
import { Text } from '../Text';
import { Dots } from '../Dots';

import { Container, Item } from './';

const meta = {
  title: 'Layout/Flex',
  component: Container,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FullWidth: Story = {
  args: {
		children: [
			(
				<Item columns={4}>
					<Text size='xxl' as='h1' weight='bold' uppercase>the sound is all yours</Text>
				</Item>
			),
			(
				<Item columns={4}>
					<Dots dotSize={3} dotSpacing={14} interactive={true} influenceRadius={100} />
				</Item>
			),
			(
				<Item columns={4}>
					<Dots dotSize={3} dotSpacing={14} interactive={true} influenceRadius={100} />
				</Item>
			)
		]
	}
};