
import React from 'react'

import styles from './Hero.module.scss';

import HeaderNav from '../HeaderNav/HeaderNav';
import Btn from '../Btn/Btn';


export default function Hero() {
    return (
        <section className={styles.container}>
            <HeaderNav reveal={true}/>
            
            <header className={styles.header}>

                <div className={styles.left}>
                    <h1 className={styles.h1}>Your Favourite Sneakers</h1>
                    <h3 className={styles.h3}> All in your Favourite sneaker hub </h3>
               
                    <Btn type='hero'>Explore Our store</Btn>
                </div>
              
              
               
            </header>
        </section>
    )
}