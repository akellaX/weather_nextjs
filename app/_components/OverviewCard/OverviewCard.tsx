import styles from './OverviewCard.module.css';
import { OverviewCardData } from '@/app/_components/OverviewCard/utils/prepareOverviewCardData';
import { getConditionProps } from '@/libs/getConditionProps/getConditionProps';
import Image from 'next/image';
import FeedbackButton from '@/components/FeedbackButton/FeedbackButton';
import Link from 'next/link';

type OverviewCardProps = {
    weatherData: OverviewCardData;
    size: 'small' | 'large';
};
export default function OverviewCard({ weatherData, size }: OverviewCardProps) {
    const { symbol } = weatherData;
    const conditionData = getConditionProps(symbol);
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
        <div className={styles.overviewCard}>
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
                <FeedbackButton />
            </div>
            <div className={styles.bodyRow}>
                <Image
                    src={conditionData.iconHref}
                    alt={conditionData.name}
                    width={56}
                    height={56}
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
            <div className={styles.footerRow}></div>
        </div>
    );
}
