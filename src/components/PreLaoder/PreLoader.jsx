
import React from 'react';
import styles from './PreLoader.module.scss';

export default function PreLoader () {
  
    return (
        <div className={styles.wrap}>
            <div  className={styles.loading}>
                <div  className={styles.bounceball}></div>
                <div className={styles.text}>NOW LOADING</div>
            </div>
        </div>
    )
};
