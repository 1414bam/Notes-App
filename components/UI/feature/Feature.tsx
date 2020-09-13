import React from 'react'
import styles from './Feature.module.scss';
import { Waypoint } from 'react-waypoint';
import Icon from 'react-icons-kit';


export const Feature = ({ tilte, text, icon }) => {
    const [isShowNow, setIsShowNow] = React.useState(false);
    const featureClass = isShowNow ? 'feature' : 'feature__opacity';
    return (
        <Waypoint onEnter={() => setIsShowNow(true)} onLeave={() => setIsShowNow(false)}>
            <div className={styles[featureClass]}>
                <Icon className={styles.feature__icon} icon={icon} />
                <div className={styles.feature__left}>
                    <span className={styles.feature__left__title}>{tilte}</span>
                    <p className={styles.feature__left__text}>{text}</p>
                </div>
            </div>
        </Waypoint>
    );
}