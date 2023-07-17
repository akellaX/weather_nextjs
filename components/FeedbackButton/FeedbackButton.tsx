'use client';

import styles from './FeedbackButton.module.css';
import Image from 'next/image';

export default function FeedbackButton({ longText }: { longText?: boolean }) {
    const text = longText ? 'Seeing different weather?' : 'Report weather';
    return (
        <button className={styles.feedbackButton}>
            <Image
                src={'/svg/feedbackIcon.svg'}
                alt='feedback icon'
                className={styles.icon}
                width={16}
                height={16}
            />
            <div>{text}</div>
        </button>
    );
}
