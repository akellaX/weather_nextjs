'use client';

import styles from './NavBar.module.css';
import { WINDOW_SIZES } from '@/constants/windowSizes';

const NUMBER_OF_ITEMS: Record<keyof typeof WINDOW_SIZES, number> = {
    MOBILE: 2,
    TABLET: 3,
    DESKTOP: 11,
};
const feedItems = ['My Feed', 'Following'];

const weatherItems = [
    'Weather',
    'Maps',
    '3D Maps',
    'Hourly Forecast',
    'Monthly Forecast',
    'Severe Weather',
    'Hurricanes',
    'Pollen',
    'Air Quality',
    'Fire Information',
    'Earthquakes',
];

export default function NavBar() {
    return (
        <nav className={styles.navBar}>
            <div className={styles.navBarItem}>
                {feedItems.map((item) => (
                    <div
                        key={item}
                        className={styles.navBarLinkItem}>
                        <p className={styles.navBarLinkItemText}>{item}</p>
                    </div>
                ))}
            </div>
            <div className={styles.navBarWeatherItem}>
                {weatherItems.map((item) => (
                    <div
                        key={item}
                        className={styles.navBarWeatherItem}>
                        <p className={styles.navBarLinkItemText}>{item}</p>
                    </div>
                ))}
            </div>
            <div className={styles.navBarItem} />
        </nav>
    );
}
