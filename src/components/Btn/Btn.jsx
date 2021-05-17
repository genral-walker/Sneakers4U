
import React, { useEffect } from 'react';
import styles from './Btn.module.scss';

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


export default function Btn(props) {

    const { children, type, tlCompleted } = props;

    useEffect(() => {
        
        gsap.registerPlugin(ScrollToPlugin);

        if (type === 'hero') {
        
        tlCompleted && gsap.to('#btn', {duration: '.4', opacity: 1,  ease: 'Power3.out'})

        }
    }, [tlCompleted])

    const checkType = type => {
        switch (type) {
            case 'hero':
                return styles.hero;

            case 'cart':
                return styles.cart;

            case 'shop':
                return styles.shop;

            default:
                return null;
        }
    };

    const scrollToMain = () => {
      type === 'hero' &&  gsap.to(window, { duration: 2.2, ease: 'slow(0.1, 0.1, false)', scrollTo: {y: '#main', offsetY: -1}});
    };


    return  <button onClick={scrollToMain} className={`${styles.btn} ${checkType(type)}`} id='btn'>{children}</button>
    
}
