
import React from 'react';

import styles from './ShoeCart.module.scss';
import shoePic from '../../assets/images/shoe-5.png';
import Btn from '../Btn/Btn';

/*

{
"imageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
"smallImageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
"thumbUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0"
}

*/


export default function ShoeCart(props) {

     const {retailPrice, media, title, shoe} = props;
     const randPrice = Math.floor(Math.random() * (301 - 62)) + 62;

    return (
        <div className={styles.cover}>
        <div className={styles.shoePix}>
            <img src={media.smallImageUrl ? media.smallImageUrl : shoePic} alt= {title} />
        </div>

        <div className={styles.details}>
            <h3>{shoe}</h3>
            <p>${(retailPrice < 10 || !retailPrice) ? randPrice : retailPrice}</p>
        
            <Btn type='cart' >Add to cart</Btn>
        </div>

        </div>
    )
}

