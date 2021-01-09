
import React from 'react';

import styles from './HeadingTetiary.module.scss';

export default function HeadingTetiary({children}) {
 
    return (
        <h3 className={styles.HeadingTetiary}>{children}</h3>
    )
}