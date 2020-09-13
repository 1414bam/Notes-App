import React from 'react'
import styles from './StoriesSection.module.scss'
import { Waypoint } from 'react-waypoint'
import Link from 'next/link';

export const StoriesSection = () => {
    const [isShowSection, setShowSection] = React.useState(false);
    const [isImageShow, setImageShow] = React.useState(false);
    const sectionClass = isShowSection ? "story__right" : 'story_opacity';
    const imageClass = isImageShow ? "leftSide__image" : 'leftSide__image_opacity';
    return (
        <div className={styles.story}>
            <div className={styles.leftSide}>
                <img className={styles[imageClass]} src={'/multi-devices-retina.png'} alt={'computer'} />
            </div>

            <Waypoint onEnter={() => { setTimeout(() => setImageShow(true), 500); setShowSection(true) }} onLeave={() => { setImageShow(false); setShowSection(false) }}>
                <div className={styles[sectionClass]}>
                    <h3 className={styles.story__right__title}>A better learning experience.</h3>
                    <p className={styles.story__right__text}>
                        -It's not enough to just look over your study materials the night before an exam. Our timed study sessions help you coordinate your study schedule. Track your progress with stats from your sessions and a complete record of your study history.
                    </p>
                    <button className={styles.story__right__button}><Link href='/NotesBoard'><a>GET STARTED</a></Link></button>
                </div>
            </Waypoint>
        </div>
    )
}