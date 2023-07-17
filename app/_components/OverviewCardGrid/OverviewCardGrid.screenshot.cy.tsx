import { composeStories } from '@storybook/react';
import * as stories from './OverviewCardGrid.stories';

const {Small, Large} = composeStories(stories);

describe('OverviewCardGrid', () => {
    it('Large Grid', () => {
        cy.mount(<Large />);
        cy.get('[data-cy-root]').matchImageSnapshot();
    });
    it('Small Grid', () => {
        cy.mount(<Small />);
        cy.get('[data-cy-root]').matchImageSnapshot();
    });
});
