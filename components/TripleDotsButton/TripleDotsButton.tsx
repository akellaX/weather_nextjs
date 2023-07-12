'use client';

import React from 'react';
import styles from './TripleDotsButton.module.css';

export default function TripleDotsButton() {
    return (
        <button className={styles.tripleDotsButtonWrapper}>
            <div className={styles.text}>...</div>
        </button>
    );
}
