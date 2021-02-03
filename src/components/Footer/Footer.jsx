
import React from 'react';

import styles from './Footer.module.scss';

export default function Footer() {

    return (
        <footer className={styles.footer}>

            <div className={styles.container}>
                <div className={styles.sections}>

                    <ul>
                        <h3 className={styles.linksHeading}>Products</h3>
                        <li className={styles.linksText}>ADIDAS</li>
                        <li className={styles.linksText}>NIKE</li>
                        <li className={styles.linksText}>JORDAN</li>
                        <li className={styles.linksText}>VANS</li>
                        <li className={styles.linksText}>PUMA</li>
                        <li className={styles.linksText}>REEBOK</li>
                    </ul>
                </div>

                <div className={styles.sections}>

                    <ul>
                        <h3 className={styles.linksHeading}>SUPPORT</h3>
                        <li className={styles.linksText}>Product Help</li>
                        <li className={styles.linksText}>Service and Warranty</li>
                        <li className={styles.linksText}>Safety Tips</li>
                        <li className={styles.linksText}>Authorised Service</li>
                        <li className={styles.linksText}>Contact support</li>
                        <li className={styles.linksText}>&nbsp;</li>
                    </ul>
                </div>

                <div className={styles.sections}>
                    <ul>
                        <h3 className={styles.linksHeading}>Company</h3>
                        <li className={styles.linksText}>ABout</li>
                        <li className={styles.linksText}>Careers</li>
                        <li className={styles.linksText}>News and events</li>
                        <li className={styles.linksText}>privacy policy</li>
                        <li className={styles.linksText}>terms of use</li>
                        <li className={styles.linksText}>Trademark</li>
                    </ul>
                </div>

                <div className={styles.sections}>
                    <ul>
                        <h3 className={styles.linksHeading}>Resources</h3>
                        <li className={styles.linksText}>our Blog</li>
                        <li className={styles.linksText}>our facebook</li>
                        <li className={styles.linksText}> our instagram</li>
                        <li className={styles.linksText}> our twitter</li>
                        <li className={styles.linksText}> our youtube</li>
                        <li className={styles.linksText}>&nbsp;</li>
                    </ul>
                </div>
            </div>
            
            <div className={styles.copyright}>
                <p>© All rights reserved Sneakers4u {new Date().getFullYear()} </p>
            </div>

        </footer>
    )
}