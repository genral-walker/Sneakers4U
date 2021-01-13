
import React, { useEffect, useState } from 'react';

import styles from './Homepage.module.scss';

import Hero from '../../components/Hero/Hero';
import HeadingSecondary from '../../components/HeadingSecondary/HeadingSecondary';
import HeadingTetiary from '../../components/HeadingTetiary/HeadingTetiary';
import ShoeCart from '../../components/ShoeCart/ShoeCart';




export default function Homepage() {

    const [shoes, updateShoes] = useState([]);
    const [index, updateIndex] = useState(0);

    const getShoes = async () => {
        try {
            const res = await fetch('https://api.thesneakerdatabase.com/v1/sneakers?limit=11&brand=NIKE');
            const items = await res.json();
            console.log(items.results);
            updateShoes(items.results);
        } catch (error) {
            console.log(error)
        }

    };


    useEffect(() => {
        getShoes();
    }, []);

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

                        { shoes && shoes.map(( {media : {smallImageUrl}}, idx)=> <ShoeCart key={idx} id={idx} smallImageUrl={smallImageUrl} />) }


                        <ShoeCart />

                    </div>

                    <HeadingTetiary>Jordan</HeadingTetiary>
                    <div className={styles.categoryItems}>

                        <ShoeCart />
                        <ShoeCart />
                        <ShoeCart />
                        <ShoeCart />

                    </div>

                    <HeadingTetiary>Addidas</HeadingTetiary>
                    <div className={styles.categoryItems}>

                        <ShoeCart />
                        <ShoeCart />
                        <ShoeCart />
                        <ShoeCart />

                    </div>

                </div>

            </section>

        </>

    )
}
