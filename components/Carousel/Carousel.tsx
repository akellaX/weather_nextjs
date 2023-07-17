'use client';

import React, { useRef, useState, useEffect } from 'react';
import styles from './Carousel.module.css';
import clsx from 'clsx';
import Image from 'next/image';

export type CarouselProps = {
    items: React.ReactNode[];
    rtl?: boolean;
    scrollStep: number;
    gap?: number;
};

const Carousel = ({ items, rtl, scrollStep, gap = 0 }: CarouselProps) => {
    const carouselRef = useRef(null);
    const [showLeftChevron, setShowLeftChevron] = useState(rtl);
    const [showRightChevron, setShowRightChevron] = useState(!rtl);

    useEffect(() => {
        if (!carouselRef?.current) {
            return;
        }
        const carousel: HTMLDivElement = carouselRef.current;
        const handleScroll = () => {
            setShowLeftChevron(carousel.scrollLeft > 0);
            setShowRightChevron(
                carousel.scrollLeft <
                    carousel.scrollWidth - carousel.clientWidth
            );
        };
        carousel.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial scroll position
        return () => carousel.removeEventListener('scroll', handleScroll);
    }, []);

    const scroll = (scrollOffset: number) => {
        if (!carouselRef?.current) {
            return;
        }
        const carousel: HTMLDivElement = carouselRef.current;
        carousel.scrollBy({
            top: 0,
            left: scrollOffset,
            behavior: 'smooth',
        });
    };

    return (
        <div className={styles.carouselWrapper}>
            <button
                className={clsx(styles.carouselChevron, styles.leftChevron)}
                onClick={() => scroll((rtl ? 1 : -1) * scrollStep)}
                disabled={!showLeftChevron}>
                <Image
                    src='/svg/carouselChevron.svg'
                    alt={'right chevron'}
                    width={7}
                    height={12}
                />
            </button>
            <div
                ref={carouselRef}
                className={styles.carouselContainer}
                style={{ gap: `${gap}px` }}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={styles.carouselItem}>
                        {item}
                    </div>
                ))}
            </div>
            <button
                className={clsx(styles.carouselChevron, styles.rightChevron)}
                onClick={() => scroll((rtl ? -1 : 1) * scrollStep)}
                disabled={!showRightChevron}>
                <Image
                    src='/svg/carouselChevron.svg'
                    alt={'right chevron'}
                    width={7}
                    height={12}
                />
            </button>
        </div>
    );
};

export default Carousel;
