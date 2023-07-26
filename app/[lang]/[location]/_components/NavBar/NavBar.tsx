import styles from './NavBar.module.css';
import { WINDOW_SIZES } from '@/constants/windowSizes';
import TripleDotsButton from '@/components/TripleDotsButton/TripleDotsButton';
import SignInButton from '@/components/SignInButton/SignInButton';
import Link from 'next/link';
import { getWeatherItems } from '@/app/[lang]/[location]/_components/NavBar/weatherItems';
import { Dictionary } from '@/types/Dictionary';

type NavBarProps = {
    darkTheme?: boolean;
    localization: Dictionary;
};

const NUMBER_OF_ITEMS: Record<keyof typeof WINDOW_SIZES, number> = {
    MOBILE: 3,
    TABLET: 5,
    DESKTOP: 10,
};
const feedItems = ['My Feed', 'Following'];

export default async function NavBar({ darkTheme, localization }: NavBarProps) {
    const weatherItems = getWeatherItems(localization);
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
                    <Link
                        key={item.title}
                        href={item.href}
                        className={styles.navBarLinkItem}>
                        <p className={styles.navBarLinkItemText}>
                            {item.title}
                        </p>
                    </Link>
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
