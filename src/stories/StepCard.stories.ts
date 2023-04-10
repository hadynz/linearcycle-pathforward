import type { Meta, StoryObj } from '@storybook/react';

import { StepCard } from '../app/components/StepCard';

const meta = {
  title: 'Example/Step Card',
  component: StepCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof StepCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoDescription: Story = {
  args: {
    title: 'Hello',
    description: undefined,
  },
};
