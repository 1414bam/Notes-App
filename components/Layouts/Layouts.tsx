import React from 'react'
import styles from './Layouts.module.scss';
import { BottomFooter } from './BottomFooter/BottomFooter'

export const Layout = (props) => {
    return (
        <div className={styles.layout}>
            <div>{props.children}</div>
            <BottomFooter />
        </div>
    )
}