import styles from './navBar.module.css';

const feedItems = [
  'My Feed',
  'Following',
];

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
    <div className={styles.navBar}>
      <div className={styles.navBarItem}>
        {feedItems.map((item) => (
          <div className={styles.navBarLinkItem}>
            <p className={styles.navBarLinkItemText}>
              {item}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.navBarWeatherItem}>
        {weatherItems.map((item) => (
          <div className={styles.navBarWeatherItem}>
            <p className={styles.navBarLinkItemText}>
              {item}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.navBarItem} />
    </div>
  );
}
