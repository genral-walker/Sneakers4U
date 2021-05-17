
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

brands

"results":[28 items
0:"ASICS"
1:"ALEXANDER MCQUEEN"
2:"BALENCIAGA"
3:"BURBERRY"
4:"CHANEL"
5:"COMMON PROJECTS"
6:"CONVERSE"
7:"CROCS"
8:"DIADORA"
9:"DIOR"
10:"GUCCI"
11:"JORDAN"
12:"LI-NING"
13:"LOUIS VUITTON"
14:"NEW BALANCE"
15:"NIKE"
16:"OFF-WHITE"
17:"OTHER"
18:"PRADA"
19:"PUMA"
20:"REEBOK"
21:"SAINT LAURENT"
22:"SAUCONY"
23:"UNDER ARMOUR"
24:"VANS"
25:"VERSACE"
26:"YEEZY"
27:"ADIDAS"
]

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

