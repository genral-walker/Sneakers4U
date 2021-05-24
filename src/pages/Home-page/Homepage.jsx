
import React, { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';

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
        let sneakerIndex = 0;

        const interval = setInterval( async () => {

            if (sneakerIndex <= 6) {

                try {

                    const res = await fetch(`https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=10&brand=${sneakers[sneakerIndex]}`, {
                        "method": "GET",
                        "headers": {
                            "x-rapidapi-key": "23ab0120a7msh99366a4689e2f5fp1091a6jsn467adc1b6969",
                            "x-rapidapi-host": "v1-sneakers.p.rapidapi.com"
                        }
                    });
        
                    let shoeObject = await res.json();
                    console.log(shoeObject);
                    shoeObject = shoeObject.results;
        
                    console.log(shoeObject);

                    setShoes(prevState => {
                        return {
                            ...prevState,
                            [sneakers[sneakerIndex]]: shoeObject
                        }
                    });
        
                } catch (error) {
                    console.log(error)   
                }

                sneakerIndex++
            } else {
                clearInterval(interval)
            }

        }, 1500);
    };

    useEffect(() => {
        // SETS LENGTH ON FIRST MOUNT ACCORDING TO BRWOSER WIDTH
        changeShoesLength();

        // SCROLL TRIGGER ANIMATION
        gsap.registerPlugin(ScrollTrigger);

        gsap.timeline({
            scrollTrigger: {
                trigger: '#main',
                scrub: 1.5,
                start: 'top 60%',
                end: 'top -1',
                snap: 1,
                toggleActions: 'restart complete reverse none',
            }
        })
            .to('#blurer', { opacity: 0, display: 'none', })
            .fromTo('.reveal', { y: 50, autoAlpha: 0 }, { duration: 1.25, y: 0, autoAlpha: 1, stagger: .4, ease: 'circ.out' }, '+1')
    }, [])

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

            <section id='main' className={styles.featured}>
                <div id='blurer' className={styles.blurer} ></div>

                <div className={`${styles.featuredIntro} reveal`}>
                    <HeadingSecondary>Featured Products</HeadingSecondary>
                    <p>We have whatever your feet are looking for</p>
                </div>

                <div className={`${styles.items} reveal`}>

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
