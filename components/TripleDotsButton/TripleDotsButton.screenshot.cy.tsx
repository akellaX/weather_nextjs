import { composeStories } from '@storybook/react';
import * as stories from './TripleDotsButton.stories';

const { Default } = composeStories(stories);

describe('TripleDotsButton', () => {
    it('visual regression', () => {
        cy.mount(<Default />);
        cy.get('[data-cy-root]').matchImageSnapshot();
    });
});
