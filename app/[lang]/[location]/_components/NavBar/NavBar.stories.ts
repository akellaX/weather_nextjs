import type { Meta, StoryObj } from '@storybook/react';
import NavBar from './NavBar';

const meta: Meta<typeof NavBar> = {
    title: 'App/NavBar',
    component: NavBar,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
    args: {},
};

export const DarkTheme: Story = {
    args: {
        darkTheme: true,
    },
};
