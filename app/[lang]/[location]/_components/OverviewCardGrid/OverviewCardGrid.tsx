import React from 'react';
import Image from 'next/image';
import styles from './OverviewCardGrid.module.css';
import { OverviewCardData } from '@/app/[lang]/[location]/_components/OverviewCard/utils/prepareOverviewCardData';
import {
    ChildrenPosition,
    OverviewCardGridElement,
} from '@/app/[lang]/[location]/_components/OverviewCardGridElement/OverviewCardGridElement';
import { useTranslations } from 'next-intl';

type GridElement = {
    title: string;
    key: keyof OverviewCardData;
    additionalIcon?: React.ReactNode;
    iconsPosition?: ChildrenPosition;
    hideInLarge?: boolean;
};

const getGridList = (): GridElement[] => {
    const t = useTranslations('overviewCard');

    return [
        {
            title: t('airQuality'),
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
            title: t('wind'),
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
            title: t('humidity'),
            key: 'humidity',
        },
        {
            title: t('feelsLike'),
            key: 'feelsLike',
            hideInLarge: true,
        },
        {
            title: t('visibility'),
            key: 'visibility',
        },
        {
            title: t('uvIndex'),
            key: 'uvIndex',
            hideInLarge: true,
        },
        {
            title: t('pressure'),
            key: 'pressure',
        },
        {
            title: t('dewPoint'),
            key: 'dewPoint',
        },
    ];
};

export default function OverviewCardGrid({
    weatherData,
    isLargeCard,
}: {
    weatherData: OverviewCardData;
    isLargeCard: boolean;
}) {
    const gridStyle = isLargeCard ? styles.oneRowGrid : styles.twoRowGrid;
    const gridList = getGridList();
    console.log('GRID LIST::: ', gridList);
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
