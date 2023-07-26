import React from 'react';
import Image from 'next/image';
import styles from './OverviewCardGrid.module.css';
import { OverviewCardData } from '@/app/[lang]/[location]/_components/OverviewCard/utils/prepareOverviewCardData';
import {
    ChildrenPosition,
    OverviewCardGridElement,
} from '@/app/[lang]/[location]/_components/OverviewCardGridElement/OverviewCardGridElement';
import { Dictionary } from '@/types/Dictionary';

type GridElement = {
    title: string;
    key: keyof OverviewCardData;
    additionalIcon?: React.ReactNode;
    iconsPosition?: ChildrenPosition;
    hideInLarge?: boolean;
};

const getGridList = ({ overviewCard }: Dictionary): GridElement[] => [
    {
        title: overviewCard.airQuality,
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
        title: overviewCard.wind,
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
        title: overviewCard.humidity,
        key: 'humidity',
    },
    {
        title: overviewCard.feelsLike,
        key: 'feelsLike',
        hideInLarge: true,
    },
    {
        title: overviewCard.visibility,
        key: 'visibility',
    },
    {
        title: overviewCard.uvIndex,
        key: 'uvIndex',
        hideInLarge: true,
    },
    {
        title: overviewCard.pressure,
        key: 'pressure',
    },
    {
        title: overviewCard.dewPoint,
        key: 'dewPoint',
    },
];

export default async function OverviewCardGrid({
    weatherData,
    isLargeCard,
    localization,
}: {
    weatherData: OverviewCardData;
    isLargeCard: boolean;
    localization: Dictionary;
}) {
    const gridStyle = isLargeCard ? styles.oneRowGrid : styles.twoRowGrid;
    const gridList = getGridList(localization);
    return (
        <div className={gridStyle}>
            {gridList.map((gridElement) => {
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
