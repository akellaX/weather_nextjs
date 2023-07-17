import { composeStories } from '@storybook/react';
import * as stories from './OverviewCardGridElement.stories';

const { WithoutIcon } = composeStories(stories);

describe('OverviewCardGridElement', () => {
    it('Large Grid', () => {
        cy.mount(<WithoutIcon />);
        cy.get('[data-cy-root]').matchImageSnapshot();
    });
    it('Small Grid', () => {
        cy.mount(<WithoutIcon />);
        cy.get('[data-cy-root]').matchImageSnapshot();
    });
});
