import { composeStories } from '@storybook/react';
import * as stories from './OverviewCard.stories';

const { Large, Small } = composeStories(stories);

describe('OverviewCard', () => {
    it('Large Card', () => {
        cy.viewport(720, 500);
        cy.mount(<Large />);
        cy.get('[data-cy-root]').matchImageSnapshot();
    });
    it('Small Card', () => {
        cy.mount(<Small />);
        cy.get('[data-cy-root]').matchImageSnapshot();
    });
});
