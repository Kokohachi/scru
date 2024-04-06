import type { Meta, StoryObj } from '@storybook/react';
import PostDropzone from './PostDropzone';

const meta = {
  title: 'Post/dropzone',
  component: PostDropzone,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof PostDropzone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

