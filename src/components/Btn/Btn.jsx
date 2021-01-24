
import React from 'react';
import styles from './Btn.module.scss';

export default function Btn(props) {

    const { children, type, click} = props;

   
    const handleClick = ()=>{
            click()
    };

    return <button
        className={`${styles.btn} ${type === 'primary' ?
            styles.primary : type === 'cart' ? styles.cart : null}`} onClick={handleClick}>
        {children}</button>
}
