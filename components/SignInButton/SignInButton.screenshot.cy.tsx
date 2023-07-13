import { composeStories } from '@storybook/react';
import * as stories from './SignInButton.stories';

const { Default } = composeStories(stories);

describe('SignInButton', () => {
    it('visual regression', () => {
        cy.mount(<Default />);
        cy.get('[data-cy-root]').matchImageSnapshot();
    });
});
