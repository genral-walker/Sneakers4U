
import React from 'react';

import styles from './ShoeCart.module.scss';
import shoe from '../../assets/images/shoe-5.png';


/*

{
"imageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
"smallImageUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
"thumbUrl": "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0"
}

*/


export default function ShoeCart({smallImageUrl}) {

    return (
        <div className={styles.cover}>
        <div className={styles.shoePix}>
     
            <img src={smallImageUrl ? smallImageUrl : shoe} alt='Sneaker Catalogue Shoe Picture'/>
        </div>
        
        </div>
    )
}

