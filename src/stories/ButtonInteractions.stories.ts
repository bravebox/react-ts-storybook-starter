// LoginForm.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Button from '../components/Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const SimpleButtonCheck: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MyButton = canvas.getByTestId("my-button");
    
    // 👇 Assert DOM structure
    await expect(MyButton).toBeInTheDocument();
    await expect(MyButton.textContent).toBe("Default");
  },
};