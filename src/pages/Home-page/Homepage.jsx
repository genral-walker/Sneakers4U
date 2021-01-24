
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

    const noImage = "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0";

    const callShoes = async (sneaker) => {
        try {
            const res = await fetch(`https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=${sneaker}`);
            const shoeObject = await res.json();

            console.log(shoeObject);

        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        const sneakers = ['JORDAN', 'NIKE', 'PUMA', 'VANS', 'CONVERSE', 'REEBOK', 'ASICS', 'ADIDAS', 'NEW BALANCE', 'SAUCONY', 'UNDER ARMOUR'];

        /*
        if (Object.keys(shoes).length !== 0) {
            console.log('not empty')
        } else {
            console.log('empty')
        }
        */

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

    }, [])

    const message = () => {
        console.log("Hello World!")
    }

    return (
        <>

            <Hero />

            <section className={styles.featured}>

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

                            {shoes.JORDAN && <Btn type='cart' >View all</Btn>}
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

                            {shoes.NIKE && <Btn type='cart' click={message}>View all</Btn>}
                        </div>
                    </div>



                </div>

            </section>
        </>

    )
}
