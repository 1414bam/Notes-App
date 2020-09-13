import React from 'react'
import styles from './Item.module.scss';
import { ic_check_box, ic_check_box_outline_blank } from 'react-icons-kit/md/'
import { Icon } from 'react-icons-kit'

export const Item = (props) => {

    return (
        <div className={styles.item}>
            <div className={styles.item_line}>{props.text}
                <Icon
                    style={{ marginLeft: '.5rem', color: props.isChecked ? 'royalblue' : 'gray' }}
                    icon={props.isChecked ? ic_check_box : ic_check_box_outline_blank} />
            </div>

        </div>
    )
}