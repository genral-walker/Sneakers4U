
import React from 'react';
import styles from './Btn.module.scss';

export default function Btn(props) {

    const { children, type, click } = props;

    const checkType = type => {
        switch (type) {
            case 'hero':
                return styles.hero;

            case 'cart':
                return styles.cart;

            case 'shop':
                return styles.shop;

            default:
                return null;
        }
    };

    return <button
        className={`${styles.btn} ${checkType(type)}`}>{children}</button>
}
