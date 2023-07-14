import styles from './OverviewCard.module.css';
import { OverviewCardData } from '@/app/_components/OverviewCard/utils/prepareOverviewCardData';
import { getConditionProps } from '@/libs/getConditionProps/getConditionProps';
import Image from 'next/image';
import FeedbackButton from '@/components/FeedbackButton/FeedbackButton';
import Link from 'next/link';
import OverviewCardGrid from '@/app/_components/OverviewCardGrid/OverviewCardGrid';

type OverviewCardProps = {
    weatherData: OverviewCardData;
    size: 'small' | 'large';
};
export default function OverviewCard({ weatherData, size }: OverviewCardProps) {
    const { symbol } = weatherData;
    const conditionData = getConditionProps(symbol);
    const isLarge = size === 'large';
    const timeOptions = {
        hour: 'numeric' as const,
        minute: 'numeric' as const,
        hour12: true,
    };
    const timeString = weatherData.responseTime.toLocaleTimeString(
        'en-US',
        timeOptions
    );
    return (
        <div
            className={`${styles.overviewCard} ${isLarge ? styles.large : ''}`}>
            <Image
                className={styles.backgroundImage}
                src={conditionData.backgroundHref}
                alt={conditionData.name}
                layout='fill'
                objectFit='cover'
                quality={100}
            />
            <div className={styles.headerRow}>
                <div className={styles.headerTextWrapper}>
                    <span className={styles.headerLabel}>Current weather</span>
                    <span className={styles.time}>{timeString}</span>
                </div>
                <FeedbackButton longText={isLarge} />
            </div>
            <div className={styles.bodyRow}>
                <Image
                    src={conditionData.iconHref}
                    alt={conditionData.name}
                    width={isLarge ? 72 : 56}
                    height={isLarge ? 72 : 56}
                />
                <Link
                    href='/maps'
                    className={styles.bodyText}>
                    <div className={styles.temperatureText}>
                        <span className={styles.temperature}>
                            {weatherData.temperature}
                        </span>
                        <span className={styles.units}>
                            {weatherData.temperatureUnit}
                        </span>
                    </div>
                    <span className={styles.temperatureCaption}>
                        {weatherData.shotDescription}
                    </span>
                </Link>
            </div>
            {isLarge && (
                <p className={styles.description}>
                    Expect sunny skies. The high will be 30°.
                </p>
            )}
            <div className={styles.footerRow}>
                <OverviewCardGrid
                    weatherData={weatherData}
                    isLargeCard={isLarge}
                />
            </div>
        </div>
    );
}
