
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderNav.module.scss';
import { useSelector } from 'react-redux';


export default function HeaderNav({type}) {

    
  const isHeroShown = useSelector(state => state.hero.shown);

    return (
        <nav className={`${styles.nav} ${type === 'hero' && styles.hero}`}>

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
                    <Link to='/away'>Shop</Link>
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
    )
}