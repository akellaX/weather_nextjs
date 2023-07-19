'use client';

import { DayCarouselProps } from '@/app/_components/DayCarousel/utils/prepareDayCarouselData';
import styles from './DayCarouselItem.module.css';
import Image from 'next/image';
import clsx from 'clsx';

type DayCarouselItemProps = {
    isExtended?: boolean;
    onClick: () => void;
} & DayCarouselProps;

const DayCarouselItem = ({
    day,
    highestTemp,
    lowestTemp,
    humidity,
    iconHref,
    condition,
    isExtended,
    onClick,
}: DayCarouselItemProps) => (
    <button
        onClick={onClick}
        className={clsx(styles.dayCarouselItem, isExtended && styles.expanded)}>
        <div className={styles.itemWrapper}>
            <span className={styles.dayInfo}>{day}</span>
            <div className={styles.contentWrapper}>
                <div className={styles.tempInfo}>
                    <Image
                        width={40}
                        height={40}
                        src={iconHref}
                        alt={condition}
                    />
                    <div className={styles.temp}>
                        <span className={styles.topTemp}>{highestTemp}</span>
                        <span className={styles.lowerTemp}>{lowestTemp}</span>
                    </div>
                </div>
                {isExtended && (
                    <div className={styles.additionalInfo}>
                        <span className={styles.condition}>{condition}</span>
                        <div className={styles.humidity}>
                            <Image
                                className={styles.humidityIcon}
                                src={'/svg/drop.svg'}
                                width={10}
                                height={10}
                                alt={'humidity'}
                            />
                            <span>{humidity}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </button>
);

export default DayCarouselItem;
