
import React, { useEffect, useRef, useState } from 'react'

import styles from './Hero.module.scss';

import HeaderNav from '../HeaderNav/HeaderNav';
import Btn from '../Btn/Btn';


export default function Hero() {

    const [state, setstate] = useState();
    const hero = useRef();

    useEffect(() => {
        const heroBottom = hero.current.getBoundingClientRect().bottom + 30;
        setstate(heroBottom);
    }, [])

    return (
        <section ref={hero} className={styles.container}>
            <HeaderNav type='hero' heroBottom={state}/>
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