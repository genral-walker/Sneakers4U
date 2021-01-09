
import React from 'react';

import styles from './Homepage.module.scss';

import Hero from '../../components/Hero/Hero'; 
import HeadingSecondary from '../../components/HeadingSecondary/HeadingSecondary';
import HeadingTetiary from '../../components/HeadingTetiary/HeadingTetiary';



export default function Homepage() {
 
    return (
        <>
        <Hero />

        <section className={styles.featured}>

        <div className={styles.featuredIntro}>

        <HeadingSecondary>Featured Products</HeadingSecondary>
        <p>We have whatever your feet are looking for</p>

        </div>

        <div className={styles.featuredItems}>


             <HeadingTetiary>Yeezy</HeadingTetiary>
            <div className={styles.categoryItems}>

            <div></div>
            <div></div>
            <div></div>
            <div></div>

            </div>

            <HeadingTetiary>Jordan</HeadingTetiary>
            <div className={styles.categoryItems}>

            <div></div>
            <div></div>
            <div></div>
            <div></div>

            </div>

            <HeadingTetiary>Addidas</HeadingTetiary>
            <div className={styles.categoryItems}>

            <div></div>
            <div></div>
            <div></div>
            <div></div>

            </div>

        </div>

        </section>

        </>
        
    )
}
