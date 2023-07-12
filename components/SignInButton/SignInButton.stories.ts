import type { Meta, StoryObj } from '@storybook/react';
import SignInButton from './SignInButton';

const meta: Meta<typeof SignInButton> = {
    title: 'components/SignInButton',
    component: SignInButton,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SignInButton>;

export const signInButton: Story = {
    args: {},
};
