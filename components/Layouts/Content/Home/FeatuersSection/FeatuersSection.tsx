import React from 'react'
import styles from './FeatuersSection.module.scss'
import { Waypoint } from 'react-waypoint'
import * as Scroll from 'react-scroll'
import { Icon } from 'react-icons-kit'
import {
    basic_smartphone,
    basic_postcard_multiple,
    ecommerce_graph2
}
    from 'react-icons-kit/linea/'

export const FeatuersSection = () => {
    return (
        <Scroll.Element name='feature-section'>
            <div className={styles.featuersSection}>
                <div className={styles.featuresList}>
                    {featuresList.map((feautre, index) => <Feature key={index} tilte={feautre.tilte} text={feautre.text} icon={feautre.icon} />)}
                </div>
            </div>
        </Scroll.Element>
    )
}


export const Feature = ({ tilte, text, icon }) => {
    const [isShowNow, setIsShowNow] = React.useState(false);
    const featureClass = isShowNow ? 'features' : 'feature__opacity';
    return (
        <Waypoint onEnter={() => setIsShowNow(true)} onLeave={() => setIsShowNow(false)}>
            <div className={styles[featureClass]}>
                <Icon className={styles.features__icon} icon={icon} />
                <div className={styles.features__left}>
                    <span className={styles.features__left__title}>{tilte}</span>
                    <p className={styles.features__left__text}>{text}</p>
                </div>
            </div>
        </Waypoint>
    );
}






const featuresList = [
    {
        tilte: 'Write and delete notes unlimited',
        text: 'There\'s a new way to take notes and it\'s faster and easier than ever before.',
        icon: basic_smartphone
    },
    {
        tilte: 'We work some magic, just try it now',
        text: 'Flashcards and study guides are awesome! Creating them? Not so much. So we fixed that.',
        icon: basic_postcard_multiple
    },
    {
        tilte: 'You study like a champ.',
        text: 'We want you to get good grades, get a great job, and be hugely successful.',
        icon: ecommerce_graph2
    },
    {
        tilte: 'You study like a champ.',
        text: 'We want you to get good grades, get a great job, and be hugely successful.',
        icon: ecommerce_graph2
    },
    {
        tilte: 'We work some magic, just try it now',
        text: 'Flashcards and study guides are awesome! Creating them? Not so much. So we fixed that.',
        icon: basic_postcard_multiple
    },
    {
        tilte: 'Write and delete notes unlimited',
        text: 'There\'s a new way to take notes and it\'s faster and easier than ever before.',
        icon: basic_smartphone
    },
];