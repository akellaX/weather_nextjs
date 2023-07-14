import { getWindowSize } from '@/libs/getWindowSize';
import { WINDOW_SIZES } from '@/constants/windowSizes';

describe('getWindowSize', () => {
    it('returns MOBILE when width is less than MOBILE', () => {
        cy.stub(window, 'innerWidth').value(WINDOW_SIZES.MOBILE - 1);
        expect(getWindowSize()).to.eq('MOBILE');
    });

    it('returns TABLET when width is less than TABLET', () => {
        cy.stub(window, 'innerWidth').value(WINDOW_SIZES.TABLET - 1);
        expect(getWindowSize()).to.eq('TABLET');
    });

    it('returns DESKTOP when width is greater than or equal to TABLET', () => {
        cy.stub(window, 'innerWidth').value(WINDOW_SIZES.TABLET);
        expect(getWindowSize()).to.eq('DESKTOP');
    });
});
