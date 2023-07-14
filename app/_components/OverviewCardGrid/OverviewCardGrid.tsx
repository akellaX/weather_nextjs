import { OverviewCardData } from '@/app/_components/OverviewCard/utils/prepareOverviewCardData';
import React from 'react';
import Image from 'next/image';
import styles from './OverviewCardGrid.module.css';
import {
    ChildrenPosition,
    OverviewCardGridElement,
} from '@/app/_components/OverviewCardGridElement/OverviewCardGridElement';

type GridElement = {
    title: string;
    key: keyof OverviewCardData;
    additionalIcon?: React.ReactNode;
    iconsPosition?: ChildrenPosition;
    hideInLarge?: boolean;
};

const GRID_LIST: GridElement[] = [
    {
        title: 'Air quality',
        key: 'airQuality',
        additionalIcon: (
            <Image
                src='/svg/greenLight.svg'
                alt={'Good'}
                width={16}
                height={16}
            />
        ),
        iconsPosition: 'left',
    },
    {
        title: 'Wind',
        key: 'windSpeed',
        additionalIcon: (
            <Image
                src='/svg/windArrow.svg'
                alt={'wind dir'}
                width={16}
                height={16}
            />
        ),
        iconsPosition: 'right',
    },
    {
        title: 'Humidity',
        key: 'humidity',
    },
    {
        title: 'Feels like',
        key: 'feelsLike',
        hideInLarge: true,
    },
    {
        title: 'Visibility',
        key: 'visibility',
    },
    {
        title: 'UV index',
        key: 'uvIndex',
        hideInLarge: true,
    },
    {
        title: 'Pressure',
        key: 'pressure',
    },
    {
        title: 'Dev point',
        key: 'dewPoint',
    },
];

export default function OverviewCardGrid({
    weatherData,
    isLargeCard,
}: {
    weatherData: OverviewCardData;
    isLargeCard: boolean;
}) {
    const gridStyle = isLargeCard ? styles.oneRowGrid : styles.twoRowGrid;
    return (
        <div className={gridStyle}>
            {GRID_LIST.map((gridElement) => {
                const { title, key, additionalIcon, iconsPosition } =
                    gridElement;
                if (isLargeCard && gridElement.hideInLarge) {
                    return null;
                }
                return (
                    <OverviewCardGridElement
                        key={key}
                        title={title}
                        text={String(weatherData[key])}
                        childrenPosition={iconsPosition}>
                        {additionalIcon ?? null}
                    </OverviewCardGridElement>
                );
            })}
        </div>
    );
}
