import type { Meta, StoryObj } from '@storybook/react';
import TripleDotsButton from './TripleDotsButton';

const meta: Meta<typeof TripleDotsButton> = {
    title: 'components/TripleDotsButton',
    component: TripleDotsButton,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TripleDotsButton>;

export const Default: Story = {
    args: {},
};

export const DarkTheme: Story = {
    args: {
        darkTheme: true,
    },
};
