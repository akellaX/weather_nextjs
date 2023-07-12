import type { Meta, StoryObj } from '@storybook/react';
import TripleDotsButton from './TripleDotsButton';

const meta: Meta<typeof TripleDotsButton> = {
    title: 'components/TripleDotsButton',
    component: TripleDotsButton,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TripleDotsButton>;

export const tripleDotsButton: Story = {
    args: {},
};
