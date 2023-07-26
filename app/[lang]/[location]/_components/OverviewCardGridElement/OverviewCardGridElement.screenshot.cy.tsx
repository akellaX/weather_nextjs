import { composeStories } from '@storybook/react';
import * as stories from './OverviewCardGridElement.stories';

const { WithoutIcon } = composeStories(stories);

describe('OverviewCardGridElement', () => {
    beforeEach(() => {
        document.body.style.backgroundColor = '#2c466c'; // Set the background color
    });
    it('Large Grid', () => {
        cy.mount(<WithoutIcon />);
        cy.get('[data-cy-root]').matchImageSnapshot();
    });
    it('Small Grid', () => {
        cy.mount(<WithoutIcon />);
        cy.get('[data-cy-root]').matchImageSnapshot();
    });
});
