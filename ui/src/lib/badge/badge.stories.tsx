import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Badge',
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Badge!/gi)).toBeTruthy();
  },
};
