import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta = {
  title: 'Header/Logo',
  component: Logo,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: {
    fontSize: "28",
    color: "black",
  },
};

export const InText: Story = {
  args: {
    fontSize: "md",
    color: "black",
  },
};

export const Login: Story = {
  args: {
    fontSize: "lg",
    color: "black",
    login: true,
  },
};

