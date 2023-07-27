import styles from './OverviewCard.module.css';
import { getConditionProps } from '@/libs/getConditionProps/getConditionProps';
import Image from 'next/image';
import FeedbackButton from '@/components/FeedbackButton/FeedbackButton';
import Link from 'next/link';
import { OverviewCardData } from '@/app/[lang]/[location]/_components/OverviewCard/utils/prepareOverviewCardData';
import OverviewCardGrid from '@/app/[lang]/[location]/_components/OverviewCardGrid/OverviewCardGrid';
import { useTranslations } from 'next-intl';

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
    const t = useTranslations('overviewCard');
    return (
        <div
            className={`${styles.overviewCard} ${isLarge ? styles.large : ''}`}>
            <Image
                className={styles.backgroundImage}
                src={conditionData.backgroundHref}
                alt={conditionData.name}
                layout='fill'
                objectFit='cover'
                {...(process.env.NEXT_PUBLIC_SCREENSHOT_TEST === 'true'
                    ? { unoptimized: true }
                    : {})}
            />
            <div className={styles.headerRow}>
                <div className={styles.headerTextWrapper}>
                    <span className={styles.headerLabel}>
                        {t('currentWeather')}
                    </span>
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
