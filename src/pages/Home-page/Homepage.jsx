
import React, { useEffect, useState } from 'react';

import styles from './Homepage.module.scss';

import useFetch from '../../hooks/useFetch';

import Hero from '../../components/Hero/Hero';
import HeadingSecondary from '../../components/HeadingSecondary/HeadingSecondary';
import HeadingTetiary from '../../components/HeadingTetiary/HeadingTetiary';
import ShoeCart from '../../components/ShoeCart/ShoeCart';



export default function Homepage() {

    const [shoes, setShoes] = useState({});

    const noImage = "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0";

    useEffect(() => {
        const sneakers = ['NIKE', 'PUMA', 'VANS', 'CONVERSE', 'JORDAN'];

        if (Object.keys(shoes).length !== 0) {
            console.log('not empty')
        } else {
            console.log('empty')
        }
        sneakers.forEach(async (sneaker) => {
            try {
                const res = await fetch(`https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=${sneaker}`);
                const shoeObject = await res.json();

                const shoeItemsArray = [];
                for (let i = 0; i < 100; i++) {
                    const randNum = Math.floor(Math.random() * 99);
                    const displayImage = shoeObject.results[randNum].media.smallImageUrl;

                    if (displayImage !== noImage && displayImage !== null) {
                        shoeItemsArray.push(shoeObject.results[randNum])
                    };
                }
                shoeItemsArray.length = 8;
                
                
                setShoes(prevState => {
                    return {
                        ...prevState,
                        [sneaker]: { count: shoeObject.count, sneakers: shoeItemsArray }
                    }
                });

            } catch (error) {
                console.log(error)
            }
        });

    }, [])
    /*
      const shoesBrand = {
        nike: useFetch('NIKE'),
        jordan: useFetch('JORDAN'),
        reebok: useFetch('REEBOK'),
        asics: useFetch('ASICS'),
        converse: useFetch('CONVERSE'),
        puma: useFetch('PUMA'),
        vans: useFetch('VANS'),
        adidas: useFetch('ADIDAS'),
        newBalance: useFetch('NEW BALANCE'),
        saucony: useFetch('SAUCONY'),
        underArmour: useFetch('UNDER ARMOUR')
    };
    */

    return (
        <>
            <Hero />

            <section className={styles.featured}>


                <div className={styles.featuredIntro}>
                    <HeadingSecondary>Featured Products</HeadingSecondary>
                    <p>We have whatever your feet are looking for</p>
                </div>

                <div className={styles.featuredItems}>

                    <HeadingTetiary>Nike</HeadingTetiary>
                    <div className={styles.categoryItems}>
                        {
                            shoes.NIKE ?
                            shoes.NIKE.sneakers.map(({ media: { smallImageUrl } }, idx) => <ShoeCart key={idx} id={idx} smallImageUrl={smallImageUrl} />) :
                                <h2>Loading.......</h2>
                        }
                    </div>

                    <HeadingTetiary>Puma</HeadingTetiary>
                    <div className={styles.categoryItems}>
                        {
                            shoes.PUMA ?
                            shoes.PUMA.sneakers.map(({ media: { smallImageUrl } }, idx) => <ShoeCart key={idx} id={idx} smallImageUrl={smallImageUrl} />) :
                                <h2>Loading.......</h2>
                        }
                    </div>

                    <HeadingTetiary>VANS</HeadingTetiary>
                    <div className={styles.categoryItems}>
                        {
                            shoes.VANS ?
                            shoes.VANS.sneakers.map(({ media: { smallImageUrl } }, idx) => <ShoeCart key={idx} id={idx} smallImageUrl={smallImageUrl} />) :
                                <h2>Loading.......</h2>
                        }
                    </div>

                    <HeadingTetiary>CONVERSE</HeadingTetiary>
                    <div className={styles.categoryItems}>
                        {
                            shoes.CONVERSE ?
                            shoes.CONVERSE.sneakers.map(({ media: { smallImageUrl } }, idx) => <ShoeCart key={idx} id={idx} smallImageUrl={smallImageUrl} />) :
                                <h2>Loading.......</h2>
                        }
                    </div>

                    <HeadingTetiary>JORDAN</HeadingTetiary>
                    <div className={styles.categoryItems}>
                        {
                            shoes.JORDAN ?
                            shoes.JORDAN.sneakers.map(({ media: { smallImageUrl } }, idx) => <ShoeCart key={idx} id={idx} smallImageUrl={smallImageUrl} />) :
                                <h2>Loading.......</h2>
                        }
                    </div>

                </div>

            </section>

        </>

    )
}
