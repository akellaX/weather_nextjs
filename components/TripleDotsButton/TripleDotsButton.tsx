'use client';

import React from 'react';
import styles from './TripleDotsButton.module.css';

type TripleDotsButtonProps = {
    darkTheme?: boolean;
};

export default function TripleDotsButton({ darkTheme }: TripleDotsButtonProps) {
    return (
        <button
            className={`${styles.tripleDotsButtonWrapper} ${
                darkTheme ? styles.tripleDotsDarkTheme : ''
            }`}>
            <div className={styles.text}>...</div>
        </button>
    );
}
