import { composeStories } from '@storybook/react';
import * as stories from './NavBar.stories';

const { Default, DarkTheme } = composeStories(stories);

describe('NavBar', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
    });
    it('visual regression', () => {
        cy.mount(<Default />);
        cy.matchImageSnapshot();
    });
    it('dark theme', () => {
        cy.mount(<DarkTheme />);
        cy.matchImageSnapshot();
    });
});
