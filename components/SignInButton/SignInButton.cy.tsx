import { composeStories } from '@storybook/react';
import * as stories from './SignInButton.stories';

const { SignInButton } = composeStories(stories);

describe('SignInButton', () => {
    it('visual regression', () => {
        cy.mount(<SignInButton />);
        cy.get('[data-cy-root]').matchImageSnapshot();
    });
});
