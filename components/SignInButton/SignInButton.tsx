'use client';
import styles from './SignInButton.module.css';

export default function SignInButton() {
    return (
        <button className={styles.signInButton}>
            <p className={styles.signInLabel}>Sign In</p>
            <img
                className={styles.logo}
                src='/svg/userIcon.svg'
            />
        </button>
    );
}
