import type { Meta, StoryObj } from '@storybook/react';

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
				<Item key="1" columns={4}>
					<Text key="11" size='xxl' as='h1' weight='bold' uppercase>the sound is all yours</Text>
				</Item>
			),
			(
				<Item key="2" columns={4}>
					<Dots key="21" dotSize={3} dotSpacing={14} interactive={true} influenceRadius={100} />
				</Item>
			),
			(
				<Item key="3" columns={4}>
					<Dots key="33" dotSize={3} dotSpacing={14} interactive={true} influenceRadius={100} />
				</Item>
			)
		]
	}
};