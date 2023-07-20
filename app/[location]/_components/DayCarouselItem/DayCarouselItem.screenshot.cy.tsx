import { composeStories } from '@storybook/react';
import * as stories from './DayCarouselItem.stories';

const { Default, Expanded } = composeStories(stories);

describe('DayCarousel', () => {
    beforeEach(() => {
        document.body.style.backgroundColor = '#2c466c'; // Set the background color
    });
    it('visual regression', () => {
        cy.mount(<Default />);
        cy.matchImageSnapshot();
    });
    it('Expanded', () => {
        cy.mount(<Expanded />);
        cy.matchImageSnapshot();
    });
});
