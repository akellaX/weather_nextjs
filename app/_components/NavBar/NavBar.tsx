import styles from './NavBar.module.css';
import { WINDOW_SIZES } from '@/constants/windowSizes';
import TripleDotsButton from '@/components/TripleDotsButton/TripleDotsButton';
import SignInButton from '@/components/SignInButton/SignInButton';

type NavBarProps = {
    darkTheme?: boolean;
};

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
    'Records And Averages',
];

const NUMBER_OF_ITEMS: Record<keyof typeof WINDOW_SIZES, number> = {
    MOBILE: 3,
    TABLET: 5,
    DESKTOP: 10,
};
const feedItems = ['My Feed', 'Following'];

export default function NavBar({ darkTheme }: NavBarProps) {
    const shownWeatherItems = weatherItems.slice(0, NUMBER_OF_ITEMS.DESKTOP);
    return (
        <nav
            className={`${styles.navBar} ${
                darkTheme ? styles.navBarDarkTheme : ''
            }`}>
            <div className={`${styles.navBarItem} ${styles.navBarItemFeed}`}>
                {feedItems.map((item) => (
                    <div
                        key={item}
                        className={styles.navBarLinkItem}>
                        <p className={styles.navBarLinkItemText}>{item}</p>
                    </div>
                ))}
            </div>
            <div className={`${styles.navBarItem} ${styles.navBarItemWeather}`}>
                {shownWeatherItems.map((item) => (
                    <div
                        key={item}
                        className={styles.navBarLinkItem}>
                        <p className={styles.navBarLinkItemText}>{item}</p>
                    </div>
                ))}
            </div>
            <div className={styles.navBarItem}>
                <div className={styles.navBarDotsItem}>
                    <TripleDotsButton darkTheme={darkTheme} />
                </div>
                <SignInButton darkTheme={darkTheme} />
            </div>
        </nav>
    );
}
