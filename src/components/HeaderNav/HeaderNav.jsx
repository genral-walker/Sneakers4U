
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './HeaderNav.module.scss';

export default function HeaderNav({ reveal }) {

    const navBar = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const body = document.body.getBoundingClientRect();
            
            console.log(body)

            if (navBar.current) {
                if (body.y <= -43) {
                    navBar.current.classList.add(styles.hide)
                } else {
                    navBar.current.classList.remove(styles.hide)
                }   
            }
            
        });
    }, []);

    // return () => {window.removeEventListener('scroll')}

    {
        return reveal && <nav ref={navBar} className={styles.nav}>

            <Link to='/' className={styles.logo}>
                Sneakers
                <span className={styles.logo4}>4</span>
                u
            </Link>


            <ul className={styles.linksContainer}>

                <li className={styles.links}>
                    <Link to='/'>Home</Link>
                </li>

                {/* This brings down the category selections list */}
                <li className={styles.links}>
                    <Link to='/'>Shop</Link>
                </li>

                <li className={styles.links}>
                    {/* Once cliked should bring a page 
                    for login(With email or google/fb) OR
                    for Register (With email or google/fb)
             
                Once logged in. it should show the person's name. else Show login
             */}
                    <Link to='/'>Login</Link>
                </li>

                <li className={styles.links}>
                    <Link to='/'>Cart</Link>
                </li>


                {/* <li>
            <Link to='/' component={Link}>Admin &#9660;</Link>
        </li> */}
            </ul>
        </nav>
    };
}