'use client';
import styles from './SignInButton.module.css';

type SignInButtonProps = {
    darkTheme?: boolean;
};

export default function SignInButton({ darkTheme }: SignInButtonProps) {
    const imgSrc = darkTheme ? '/svg/userIconWhite.svg' : '/svg/userIcon.svg';
    return (
        <button
            className={`${styles.signInButton} ${
                darkTheme ? styles.signInButtonDarkTheme : ''
            }`}>
            <p>Sign In</p>
            <img
                className={styles.logo}
                src={imgSrc}
            />
        </button>
    );
}
