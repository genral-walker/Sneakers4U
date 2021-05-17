
import React, { useEffect, useRef, useState } from 'react'

import styles from './Hero.module.scss';

import HeaderNav from '../HeaderNav/HeaderNav';
import Btn from '../Btn/Btn';

import { gsap } from "gsap";
import { Power3 } from 'gsap/all';

export default function Hero() {

    const [state, setstate] = useState();
    const [timelineCompleted, setTimelineCompleted] = useState(false);
    const hero = useRef();
    const HeroTl = gsap.timeline({onComplete: ()=> setTimelineCompleted(true)});


    useEffect(() => {
        const heroBottom = hero.current.getBoundingClientRect().bottom + 30;
        setstate(heroBottom);

        HeroTl.from('.line-inner', { duration: .8, delay: .4, y: '100%', stagger: .15, ease: 'Power3.out'});
    }, [])

    return (
        
        <section ref={hero} className={styles.container}>
            <HeaderNav type='hero' heroBottom={state} tl={HeroTl}/>
            <header className={styles.header}>
                <div className={styles.left}>
                    <h1 className={styles.h1}>
                        <span className={styles.lineOuter}><span className='line-inner'>Your</span></span> <span className={styles.lineOuter}><span className='line-inner'>Favourite</span></span> <span className={styles.lineOuter}><span className='line-inner'>Sneakers</span></span></h1>
                    <h3 className={`${styles.h3} ${styles.lineOuter}`}> <span className='line-inner'>All in your Favourite sneaker hub</span> </h3>

                    <Btn type='hero' tlCompleted={timelineCompleted}>Explore Our store</Btn>
                </div>
            </header>
        </section>
    )
}