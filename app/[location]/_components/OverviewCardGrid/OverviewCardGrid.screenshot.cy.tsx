import { composeStories } from '@storybook/react';
import * as stories from './OverviewCardGrid.stories';

const { Small, Large } = composeStories(stories);

describe('OverviewCardGrid', () => {
    beforeEach(() => {
        document.body.style.backgroundColor = '#2c466c'; // Set the background color
    });
    it('Large Grid', () => {
        cy.mount(<Large />);
        cy.get('[data-cy-root]').matchImageSnapshot();
    });
    it('Small Grid', () => {
        cy.mount(<Small />);
        cy.get('[data-cy-root]').matchImageSnapshot();
    });
});
