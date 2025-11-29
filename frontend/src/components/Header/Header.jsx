import React from 'react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src="/grass-block-icon.png" alt="grass block icon"></img>
            <div className={styles.nav}>
                <p className={styles.navItem}>Home</p>
                <p className={styles.navItem}>1.7/1.8 PVP</p>
                <p className={styles.navItem}>1.9 PVP</p>  
            </div>
            <p className={styles.userName}>User&apos;s Name</p>
        </header>
    )
}