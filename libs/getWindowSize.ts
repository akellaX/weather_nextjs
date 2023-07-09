import { WINDOW_SIZES } from '@/constants/windowSizes';

export const getWindowSize = (): keyof typeof WINDOW_SIZES => {
  const { innerWidth: width } = window;
  if (width < WINDOW_SIZES.MOBILE) {
    return 'MOBILE';
  }
  if (width < WINDOW_SIZES.TABLET) {
    return 'TABLET';
  }
  return 'DESKTOP';
};
