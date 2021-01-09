
import React from 'react';
import styles from './HeadingSecondary.module.scss';

export default function HeadingSecondary({children}) {
 
    return (
        <h2 className={styles.headingSecondary}>{children}</h2>
    )
}
