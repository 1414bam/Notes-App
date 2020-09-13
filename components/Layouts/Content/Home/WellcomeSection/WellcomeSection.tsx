import React from 'react'
import styles from './WellcomeSection.module.scss'
import Link from 'next/link'
import * as Scroll from 'react-scroll';

export const WellcomeSection = () => {

    return (
        <div className={styles.wellcomeSection}>
            <div className={styles.top_section}>
                <span className={styles.notes_logo}>Notes
                <span className={styles.notes_logo__end}>App</span>
                </span>
                <div className={styles.top_section__header}>
                    Improve your learning workflow with instantly generated flashcard decks and study session analytics.
                </div>
            </div>


            <div className={styles.middle_main_content}>

                <div className={styles.buttons}>
                    <button className={styles.buttons__outline}>
                        <Scroll.Link to='feature-section' spy={true} smooth={true}>START EXPLORE</Scroll.Link>
                    </button>

                </div>
            </div>

        </div>
    )
}