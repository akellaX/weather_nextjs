'use client';
import { DayCarouselProps } from '@/app/[lang]/[location]/_components/DayCarousel/utils/prepareDayCarouselData';
import { useState } from 'react';
import DayCarouselItem from '@/app/[lang]/[location]/_components/DayCarouselItem/DayCarouselItem';
import Carousel from '@/components/Carousel/Carousel';
import styles from './DayCarousel.module.css';

const DayCarousel = ({ item }: { item: DayCarouselProps[] }) => {
    const [expandedIndex, setExpandedIndex] = useState(0);
    const carouselItems = item.map((item, index) => {
        const isExpanded = index === expandedIndex;
        return (
            <DayCarouselItem
                onClick={() => setExpandedIndex(index)}
                key={item.day}
                {...item}
                isExtended={isExpanded}
            />
        );
    });

    return (
        <div className={styles.dayCarouselWrapper}>
            <Carousel
                items={carouselItems}
                scrollStep={200}
                gap={8}
            />
        </div>
    );
};

export default DayCarousel;
