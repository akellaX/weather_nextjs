import styles from './OverviewCardGridElement.module.css';
import Link from 'next/link';

export type ChildrenPosition = 'right' | 'left';

type OverviewCardGridElementProps = {
    children?: React.ReactNode;
    childrenPosition?: ChildrenPosition;
    title: string;
    text: string;
};
export const OverviewCardGridElement = ({
    children,
    childrenPosition,
    title,
    text,
}: OverviewCardGridElementProps) => {
    return (
        <Link
            href='/maps'
            className={styles.gridElement}>
            <span className={styles.title}>{title}</span>
            <div className={styles.textRow}>
                {childrenPosition === 'left' && children}
                <span className={styles.text}>{text}</span>
                {childrenPosition === 'right' && children}
            </div>
        </Link>
    );
};
