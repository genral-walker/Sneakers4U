
import React, { useEffect, useState } from 'react';

import styles from './Homepage.module.scss';

import Loading from '../../components/Loading/Loading';
import Hero from '../../components/Hero/Hero';
import HeadingSecondary from '../../components/HeadingSecondary/HeadingSecondary';
import HeadingTetiary from '../../components/HeadingTetiary/HeadingTetiary';
import ShoeCart from '../../components/ShoeCart/ShoeCart';
import Btn from '../../components/Btn/Btn';


/**
 * Check for react aynchronous natour
 * Check what random numb always is
 * */


export default function Homepage() {

    const [shoes, setShoes] = useState({});
    const [length, setLength] = useState();

    const changeShoesLength = () => {
        if (window.matchMedia('(max-width: 800px)').matches) {
            setLength(6);
        } else {
            setLength(8);
        }
    };

    const fetchData = () => {
        const noImage = "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0";

        const sneakers = ['JORDAN', 'REEBOK', 'UNDER ARMOUR', 'NIKE', 'ADIDAS', 'NEW BALANCE', 'SAUCONY'];

        sneakers.forEach(async (sneaker) => {
            try {
                const res = await fetch(`https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=${sneaker}`);
                let shoeObject = await res.json();
                shoeObject = shoeObject.results;

                // SHOES OBJECTS WILL BE INSERTED HERE AFTER LITTLE ALGORITHM
                const shoeItemsArray = [];

                // LITTLE ALGORITHM
                for (let i = 0; i < 100; i++) {
                    // GENERATE RANDOM NUMBERS
                    const randNum = Math.floor(Math.random() * 100);

                    // CHECKS TO SEE API OBJ THAT HAS AN IMAGE
                    const displayImage = shoeObject[randNum].media.smallImageUrl;
                    if (displayImage !== noImage && displayImage !== null) {
                        // THEN MAKES SURE THE OBJ IS STORED ONLY ONCE
                        if (!shoeItemsArray.includes(shoeObject[randNum])) {
                            shoeItemsArray.push(shoeObject[randNum]);
                        }
                    };

                }
                // SHORTENS ARRAY INSIDE BELOW TO 9... THE HIGHEST POSSILITY WHEN SCREEN IS RESIZED
                shoeItemsArray.length = 9;

                setShoes(prevState => {
                    return {
                        ...prevState,
                        [sneaker]: shoeItemsArray
                    }
                });

            } catch (error) {
                console.log(error)
            }
        });
    };

    // SETS LENGTH ON FIRST MOUNT ACCORDING TO BRWOSER WIDTH
    useEffect(() => changeShoesLength(), [])

    // WHERE ITEMS TO DISPLAY IN CART ARE PROCESSED
    useEffect(() => {
        if (sessionStorage.getItem('storageSneakers')) {
            setShoes(JSON.parse(sessionStorage.getItem('storageSneakers')))
        } else {
            fetchData()
        }

        // RESETS LENGTH WHEN PAGE RESIZED TO FIT THE PAGE AS SPECIFIED IN CSS
        window.addEventListener('resize', changeShoesLength);
        return () => window.removeEventListener('resize', changeShoesLength)

    }, []);

    // UPDATE SESSION STORAGE TO AVOID LOADING FROM API WHEN COMPONENT REMOUNTS
    useEffect(() => {
        if (!Object.keys(shoes).length <= 0) {
            sessionStorage.setItem('storageSneakers', JSON.stringify(shoes));
        }
    }, [shoes])

    return (
        <>
            <Hero />

            <section className={styles.featured}>
                {/* <div className={styles.blurer}></div> */}

                <div className={styles.featuredIntro}>
                    <HeadingSecondary>Featured Products</HeadingSecondary>
                    <p>We have whatever your feet are looking for</p>
                </div>

                <div className={styles.items}>

                    <div>
                        <HeadingTetiary>JORDAN</HeadingTetiary>
                        <div className={styles.categoryItems}>
                            {
                                shoes.JORDAN ?
                                    shoes.JORDAN.map((props, idx) => (idx < length) && <ShoeCart key={props.id} {...props} />) :
                                    <Loading />
                            }

                            {shoes.JORDAN && <Btn type='shop' >View all</Btn>}
                        </div>
                    </div>

                    <div>
                        <HeadingTetiary>REEBOK</HeadingTetiary>
                        <div className={styles.categoryItems}>
                            {
                                shoes.REEBOK ?
                                    shoes.REEBOK.map((props, idx) => (idx < length) && <ShoeCart key={props.id} {...props} />) :
                                    <Loading />
                            }

                            {shoes.REEBOK && <Btn type='shop' >View all</Btn>}
                        </div>
                    </div>

                    <div>
                        <HeadingTetiary>UNDER ARMOUR</HeadingTetiary>
                        <div className={styles.categoryItems}>
                            {
                                shoes['UNDER ARMOUR'] ?
                                    shoes['UNDER ARMOUR'].map((props, idx) => (idx < length) && <ShoeCart key={props.id} {...props} />) :
                                    <Loading />
                            }

                            {shoes['UNDER ARMOUR'] && <Btn type='shop' >View all</Btn>}
                        </div>
                    </div>

                    <div>
                        <HeadingTetiary >Nike</HeadingTetiary>
                        <div className={styles.categoryItems}>
                            {
                                shoes.NIKE ?
                                    shoes.NIKE.map((props, idx) => (idx < length) && <ShoeCart key={props.id} {...props} />) :
                                    <Loading />
                            }

                            {shoes.NIKE && <Btn type='shop'>View all</Btn>}
                        </div>
                    </div>

                    <div>
                        <HeadingTetiary>SAUCONY</HeadingTetiary>
                        <div className={styles.categoryItems}>
                            {
                                shoes.SAUCONY ?
                                    shoes.SAUCONY.map((props, idx) => (idx < length) && <ShoeCart key={props.id} {...props} />) :
                                    <Loading />
                            }

                            {shoes.SAUCONY && <Btn type='shop' >View all</Btn>}
                        </div>
                    </div>

                    <div>
                        <HeadingTetiary>ADIDAS</HeadingTetiary>
                        <div className={styles.categoryItems}>
                            {
                                shoes.ADIDAS ?
                                    shoes.ADIDAS.map((props, idx) => (idx < length) && <ShoeCart key={props.id} {...props} />) :
                                    <Loading />
                            }

                            {shoes.ADIDAS && <Btn type='shop' >View all</Btn>}
                        </div>
                    </div>

                    <div>
                        <HeadingTetiary>NEW BALANCE</HeadingTetiary>
                        <div className={styles.categoryItems}>
                            {
                                shoes['NEW BALANCE'] ?
                                    shoes['NEW BALANCE'].map((props, idx) => (idx < length) && <ShoeCart key={props.id} {...props} />) :
                                    <Loading />
                            }

                            {shoes['NEW BALANCE'] && <Btn type='shop' >View all</Btn>}
                        </div>
                    </div>

                </div>

            </section>
        </>

    )
}
