import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
  title: 'Header/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
      avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjipzRtpZjsQTDASewyzWpTyy7s6MBrfTpfP732_vC-w&s',
      email: 'jh00000000@s.test.ed.jp'
    },
  },
};

export const LoggedOut: Story = {};
