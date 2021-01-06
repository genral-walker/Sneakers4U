
import React from 'react'

import styles from './Hero.module.scss';

import HeaderNav from '../HeaderNav/HeaderNav'


export default function Hero() {
    return (
        <section className={styles.container}>
            <HeaderNav />
            
            <header className={styles.header}>

                <div className={styles.left}>
                    <h1 className={styles.h1}>Your Favourite Sneakers</h1>
                    <h3 className={styles.h3}> All in your Favourite sneaker hub </h3>
               
                    <button className={styles.btn}>Explore Our store</button>
                </div>
              
              
               
            </header>
        </section>
    )
}