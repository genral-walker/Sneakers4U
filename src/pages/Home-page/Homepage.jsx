
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

    const fetchData = () => {

        const noImage = "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0";

        const sneakers = ['JORDAN', 'REEBOK', 'UNDER ARMOUR', 'NIKE', 'ADIDAS', 'NEW BALANCE', 'SAUCONY'];

        sneakers.forEach(async (sneaker) => {
            try {
                const res = await fetch(`https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=${sneaker}`);
                const shoeObject = await res.json();

                // SHOES OBJECTS WILL BE INSERTED HERE AFTER LITTLE ALGORITHM
                const shoeItemsArray = [];

                // LITTLE ALGORITHM
                for (let i = 0; i < 100; i++) {
                    // GENERATE RANDOM NUMBERS
                    const randNum = Math.floor(Math.random() * 100);

                    // CHECKS TO SEE API OBJ THAT HAS AN IMAGE
                    const displayImage = shoeObject.results[randNum].media.smallImageUrl;
                    if (displayImage !== noImage && displayImage !== null) {
                        // THEN MAKES SURE THE OBJ IS STORED ONLY ONCE
                        if (!shoeItemsArray.includes(shoeObject.results[randNum])) {
                            shoeItemsArray.push(shoeObject.results[randNum]);
                        }
                    };

                }
                // SHORTENS ARRAY INSIDE BELOW TO 8
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
    };

    useEffect(() => {

        // THIS ISN'T WORKING YET WE NEED TO NOT CALL IT EVERYTIME HE COMPONENTS UNMOUNT
        // INSTAED WE SHOULD CHECK FROM THE REDUX STATE IF WE HAVE ANY SHOES OBJECT
        if (localStorage.getItem('storageSneakers')) {
            setShoes(JSON.parse(localStorage.getItem('storageSneakers')))
        } else {
            fetchData()
        }

    }, []);

    useEffect(() => {
        if (!Object.keys(shoes).length <= 0) localStorage.setItem('storageSneakers', JSON.stringify(shoes));
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
                                    shoes.JORDAN.sneakers.map((props) => <ShoeCart key={props.id} {...props} />) :
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
                                    shoes.REEBOK.sneakers.map((props) => <ShoeCart key={props.id} {...props} />) :
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
                                    shoes['UNDER ARMOUR'].sneakers.map((props) => <ShoeCart key={props.id} {...props} />) :
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
                                    shoes.NIKE.sneakers.map((props) => <ShoeCart key={props.id} {...props} />) :
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
                                    shoes.SAUCONY.sneakers.map((props) => <ShoeCart key={props.id} {...props} />) :
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
                                    shoes.ADIDAS.sneakers.map((props) => <ShoeCart key={props.id} {...props} />) :
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
                                    shoes['NEW BALANCE'].sneakers.map((props) => <ShoeCart key={props.id} {...props} />) :
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
