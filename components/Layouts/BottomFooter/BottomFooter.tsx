import React from 'react'
import styles from './BottomFooter.module.scss'

export const BottomFooter = () => {
    return (
        <div className={styles.bottomFooter}>

            <div className={styles.logos}>
                <span className={styles.notes_logo}>Notes<span className={styles.notes_logo__end}>App</span></span>
            </div>

            <p className={styles.copyright}>
                &copy; Copyright 2020 by <b>Avraham Batoniashvili</b> Fullstack Developer with skills in React & Node.js
            </p>
        </div>
    )
}